import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieList } from '../interfaces/movie-list.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  fetchMovies() {
    return this.http.get<MovieList>(environment.moviesUrl).toPromise();
  }

  async fetchMovieById(movieId: string) {
    const movies = await this.fetchMovies();
    return movies.find(movie => movie.id === movieId);
  }

  async fetchPromoMovies() {
    const movies = await this.fetchMovies();
    return movies.slice(0,3);
  }
}
