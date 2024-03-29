import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './core/components/app/app.component';
import { MovieListComponent } from './core/components/movie-list/movie-list.component';
import { MovieListItemComponent } from './core/components/movie-list-item/movie-list-item.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { VideoPlayerComponent } from './core/components/video-player/video-player.component';

import { PageHomeComponent } from './core/pages/page-home/page-home.component';
import { PageMovieListComponent } from './core/pages/page-movie-list/page-movie-list.component';
import { PageContactComponent } from './core/pages/page-contact/page-contact.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { PageMovieProfileComponent } from './core/pages/page-movie-profile/page-movie-profile.component';

import { JumbotronDirective } from './core/directives/jumbotron/jumbotron.directive';
import { HideMeDirective } from './core/directives/hide-me/hide-me.directive';
import { SharedModule } from './shared/shared.module';
import { PageAuthorsComponent } from './core/pages/page-authors/page-authors.component';
import { BaseFooterComponent } from './core/components/base-footer/base-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    JumbotronDirective,
    HideMeDirective,
    PageMovieListComponent,
    PageContactComponent,
    MovieListComponent,
    MovieListItemComponent,
    MenuComponent,
    PageNotFoundComponent,
    PageMovieProfileComponent,
    VideoPlayerComponent,
    PageAuthorsComponent,
    BaseFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
