import { Routes } from '@angular/router';

import { PageHomeComponent } from './core/pages/page-home/page-home.component';
import { PageMovieListComponent } from './core/pages/page-movie-list/page-movie-list.component';
import { PageContactComponent } from './core/pages/page-contact/page-contact.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { PageMovieProfileComponent } from './core/pages/page-movie-profile/page-movie-profile.component';

export const routes: Routes =
[
    {
        path: '',
        component: PageHomeComponent
    },
    {
        path: 'movies',
        children: [
            {
                path: '',
                component: PageMovieListComponent
            },
            {
                path: ':id',
                component: PageMovieProfileComponent
            }
        ]
    },
    {
        path: 'contact',
        component: PageContactComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]
