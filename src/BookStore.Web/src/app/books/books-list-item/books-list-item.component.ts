import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BooksModalViewComponent } from '../books-modal-view/books-modal-view.component';
import { BooksModalEditComponent } from '../books-modal-edit/books-modal-edit.component';


@Component({
  selector: '[app-books-list-item]',
  templateUrl: './books-list-item.component.html'
})

export class BooksListItemComponent implements OnInit {
  bsModalRef: BsModalRef;

  @Input() book: Book;

  constructor(private bookService: BooksService, private modalService: BsModalService) { }

  ngOnInit() {
  }

	openModalView(book: Book) {
		this.bsModalRef = this.modalService.show(BooksModalViewComponent);
		this.bsModalRef.content.title = `Livro ${book.title}`;
		this.bsModalRef.content.book = book;
	}

  openModalEdit(book: Book) {
		this.bsModalRef = this.modalService.show(BooksModalEditComponent);
		this.bsModalRef.content.title = 'Editar livro';
		this.bsModalRef.content.book = book;
  }

	onClickDeleted(book: Book): void {
		this.bookService.delete(book).subscribe(
			response => {
			},
			err => {
				console.log('Erro ao deletar (verifique se a API está sendo executada)' , err);
		});
	}
}
