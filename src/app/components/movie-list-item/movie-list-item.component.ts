import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
    setTimeout(() => {
      this.movie.rate = 10;
      this.changeDetector.markForCheck();
    }, 2000)
  }

  redirectMovieProfile() {
    this.router.navigateByUrl('/movies/' + this.movie.id);
  }

  buildRate() {
    console.log(1);
    return this.movie.rate * 10 + '%';
  }

}
