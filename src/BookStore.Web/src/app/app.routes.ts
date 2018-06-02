import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { booksRoutes } from './books/books.routes';
import { homeRoutes } from './home/home.routes';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  ...booksRoutes,
  ...homeRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
