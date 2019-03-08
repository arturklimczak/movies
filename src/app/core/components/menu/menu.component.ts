import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators'
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedUser = false;
  loggedUserName: User = null;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.verifyLoggedUser();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(this.verifyLoggedUser.bind(this));
  }

  async verifyLoggedUser() {
    try {
      const result = await this.auth.isLoggedUser();
      this.isLoggedUser = true;
      this.loggedUserName = await this.auth.getLoggedUserName();
    } catch(e) {
      this.isLoggedUser = false;
    }
  }
}
