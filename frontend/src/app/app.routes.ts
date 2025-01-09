import { Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
export const routes: Routes = [
    { path: 'login', component: RegisterComponent, title: 'inicio Sesion' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
