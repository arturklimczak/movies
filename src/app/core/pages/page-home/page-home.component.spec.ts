import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { PageHomeComponent } from './page-home.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';
import { Movie } from '../../interfaces/movie.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;
  let $element: HTMLElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeComponent, MovieListComponent, MovieListItemComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    $element = fixture.debugElement.nativeElement;
    // fixture.detectChanges();
  });

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display thumb list', fakeAsync(() => {
    const movie: Movie = {
      id: 'fake-id',
      title: 'fake-title',
      description: 'fake-description',
      thumb_url: 'fake-thumb_url',
      movie_url: 'fake-movie_url',
      year: 1995,
      duration: 12,
      rate: 4
    };
    const movies = [movie, movie, movie];
    component.getPromoMovies = () => Promise.resolve(movies);
    expect(component.movies).toEqual(null);

    fixture.detectChanges();
    flush();
    expect(component.movies.length).toEqual(3);
    fixture.detectChanges();

    const list = $element.querySelectorAll('app-movie-list-item');

    expect(list.length).toEqual(3);
  }));

});
