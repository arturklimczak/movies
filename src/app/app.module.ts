import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MenuComponent } from './components/menu/menu.component';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMovieListComponent } from './pages/page-movie-list/page-movie-list.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';

import { JumbotronDirective } from './directives/jumbotron/jumbotron.directive';
import { HideMeDirective } from './directives/hide-me/hide-me.directive';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
