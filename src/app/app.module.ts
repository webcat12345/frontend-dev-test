import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpStatusModule } from 'http-status-pipe';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './core/services/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavbarComponent } from './partials/navbar/navbar.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'error/:status_code',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        HttpStatusModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
