import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators'
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedUser = false;
  loggedUserName = '';

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(this.verifyLoggedUser.bind(this));

      this.verifyLoggedUser();
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
