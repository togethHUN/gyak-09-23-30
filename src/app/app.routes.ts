/*
* File: app.routes.ts
* Author: Tóth Gergely
* Copyright: 2026, Tóth Gergely
* Group: Szoft II/N
* Date: 2026-09-30
* Github: https://github.com/togethHUN/
* Licenc: MIT
*/



import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GulaComponent } from './gula/gula.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'gula', component: GulaComponent}
];
