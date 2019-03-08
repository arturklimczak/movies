import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieList } from 'src/app/core/interfaces/movie-list.interface';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  movies: MovieList = null;

  constructor(private moviesService: MoviesService) { }

  async ngOnInit() {
    console.log('ngOnInit');
    this.movies = await this.getPromoMovies();
  }

  async getPromoMovies() {
    console.log('getPromoMovies');
    return await this.moviesService.fetchPromoMovies();
  }
}
