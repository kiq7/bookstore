import { Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';

export const booksRoutes: Routes = [
    {
        path: 'livros',
        component: BooksListComponent
    }
];
