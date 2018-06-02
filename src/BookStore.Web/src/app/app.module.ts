import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, AlertModule } from 'ngx-bootstrap';
import { ValidationDirective } from './common/directives/validation.directive';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BooksService } from './books/services/books.service';
import { BooksModalViewComponent } from './books/books-modal-view/books-modal-view.component';
import { BooksListItemComponent } from './books/books-list-item/books-list-item.component';
import { BooksModalInsertComponent } from './books/books-modal-insert/books-modal-insert.component';
import { BooksModalEditComponent } from './books/books-modal-edit/books-modal-edit.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    NavbarComponent,
    BooksModalViewComponent,
    BooksListItemComponent,
    BooksModalInsertComponent,
    ValidationDirective,
    BooksModalEditComponent,
    HomeIndexComponent
  ],
  entryComponents: [
    BooksModalViewComponent,
    BooksModalInsertComponent,
    BooksModalEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    routing
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
