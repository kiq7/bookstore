import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-books-modal-edit',
  templateUrl: './books-modal-edit.component.html'
})
export class BooksModalEditComponent implements OnInit {
  modalForm: FormGroup;
  title: string;
  book: Book = new Book();

  constructor(private bookService: BooksService, public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.modalForm = new FormGroup({
      isbn: new FormControl(this.book.isbn, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13)
      ]),
      title: new FormControl(this.book.title, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100)
      ]),
      author: new FormControl(this.book.title, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      publisher: new FormControl(this.book.title, [
        Validators.required,
        Validators.minLength(1)
      ]),

      language: new FormControl()
    });
  }

  onClickSave(): void {
    this.bookService.update(this.book).subscribe(
			response => {
        this.bsModalRef.hide();
        this.bsModalRef = null;
			},
			err => {
				console.log('Erro ao salvar (verifique se a API está sendo executada)', err);
		});
  }

}
