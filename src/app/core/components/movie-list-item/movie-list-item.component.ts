import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListItemComponent implements OnInit {
  @Input() movie = null;

  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  redirectMovieProfile() {
    this.router.navigateByUrl('/movies/' + this.movie.id);
  }

  buildRate() {
    return this.movie.rate * 10 + '%';
  }

}
