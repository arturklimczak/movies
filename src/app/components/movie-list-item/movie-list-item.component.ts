import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  @Input() movie = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirectMovieProfile() {
    this.router.navigateByUrl('/movies/' + this.movie.id);
  }

}
