import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Book } from '../models/book';

@Component({
  selector: 'app-books-modal-view',
  templateUrl: './books-modal-view.component.html'
})
export class BooksModalViewComponent implements OnInit {

  title: string;
  book: Book = new Book();
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
