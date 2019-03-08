import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerComponent } from './video-player.component';
import { Movie } from '../../interfaces/movie.interface';
import { EventEmitter } from '@angular/core';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;
  let $element: HTMLElement = null;
  let movie =

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerComponent);
    component = fixture.componentInstance;
    $element = fixture.nativeElement;
    fixture.detectChanges();
    // prepare();
  });

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function prepare() {
    const movie: Movie = {
      id: 'string',
      title: 'string',
      description: 'string',
      thumb_url: 'string',
      movie_url: 'https://www.youtube.com/embed/FHzgsiNO6AY',
      year: 1995,
      duration: 41,
      rate: 5
    }

    component.movie = movie;
    component.status = new EventEmitter();
  }

  it('should video playing after click play button', () => {
    fixture.detectChanges();
    const movie: Movie = {
      id: 'string',
      title: 'string',
      description: 'string',
      thumb_url: 'string',
      movie_url: 'https://www.youtube.com/embed/FHzgsiNO6AY',
      year: 1995,
      duration: 41,
      rate: 5
    }

    component.movie = movie;
    component.status = new EventEmitter();
    component.player = {
      nativeElement: {
        play: () => {}
      }
    };

    const spy = spyOn(component, 'play');

    fixture.detectChanges();

    component.status.subscribe(evt => {
      expect(evt.status).toEqual('playing');
    });

    const $play = $element.querySelectorAll('button')[0];
    $play.click();

    expect(spy).toHaveBeenCalled();
  });
});
