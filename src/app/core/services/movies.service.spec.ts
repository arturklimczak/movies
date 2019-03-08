import { TestBed, flush, fakeAsync } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoviesService', () => {
  let service: MoviesService = null;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(MoviesService);
  });

  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
  });

  describe('fetchMovies', () => {
    it('should exists', () => {
      expect(service.fetchMovies).toEqual(jasmine.any(Function));
    });

    xit('should return long list of movies', () => {
      service.fetchMovies()
        .then(movies => {
          expect(movies.length).toEqual(4);
        })
    });
  });

  describe('fetchMovies', () => {
    it('', () => {

    });
  });

  describe('fetchMovies', () => {
    it('', () => {

    });
  });
});
