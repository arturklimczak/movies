import { Routes } from '@angular/router';
import { PageUserProfileComponent } from './pages/page-user-profile/page-user-profile.component';
import { PageUserLoginComponent } from './pages/page-user-login/page-user-login.component';
import { PageUserRegisterComponent } from './pages/page-user-register/page-user-register.component';
import { PageUserLogoutComponent } from './pages/page-user-logout/page-user-logout.component';
export const routes: Routes = [
    {
        path: 'profile',
        component: PageUserProfileComponent
    },
    {
        path: 'login',
        component: PageUserLoginComponent
    },
    {
        path: 'register',
        component: PageUserRegisterComponent
    },
    {
        path: 'logout',
        component: PageUserLogoutComponent
    }
];