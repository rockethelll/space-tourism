import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'destination',
    loadComponent: () =>
      import('./destination/destination').then((m) => m.Destination),
  },
  {
    path: 'crew',
    loadComponent: () =>
      import('./crew/crew').then((m) => m.Crew),
  },
  { 
    path: 'technology',
    loadComponent: () =>
      import('./technology/technology').then((m) => m.Technology),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
