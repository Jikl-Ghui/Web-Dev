import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'events' },
  {
    path: 'events',
    loadComponent: () =>
      import('./events/events-list/events-list.component').then((m) => m.EventsListComponent),
  },
  { path: '**', redirectTo: 'events' },
];
