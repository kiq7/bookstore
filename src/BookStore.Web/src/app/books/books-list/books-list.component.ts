import { Component, OnInit, TemplateRef } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BooksModalInsertComponent } from '../books-modal-insert/books-modal-insert.component';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
	public alerts: any = [];
	bsModalRef: BsModalRef;
	bookList: Book[];
	loading: boolean;
	inserted: boolean;

  	constructor(private bookService: BooksService, private modalService: BsModalService) {
		this.bookService.list$.subscribe(
			data => {
				this.bookList = data;
			},
			err => {
				console.log('Erro ao recuperar livros (verifique se a API está sendo executada)' , err);
		});
		this.bookService.loadingList$.subscribe(
			response => this.loading = response
		);
		this.bookService.inserted$.subscribe(
			response => {
				if (response === true) {
					this.alerts.push({
						type: 'success',
						msg: `Livro adicionado com sucesso`,
						timeout: 6000
					});
					this.loadData();
				}
			}
		);
		this.bookService.updated$.subscribe(
			response => {
				if (response === true) {
					this.alerts.push({
						type: 'success',
						msg: `Livro atualizado com sucesso`,
						timeout: 6000
					});

					this.loadData();
				}
			}
		);
		this.bookService.deleted$.subscribe(
			response => {
				if (response === true) {
					this.alerts.push({
						type: 'danger',
						msg: `Livro deletado com sucesso`,
						timeout: 6000
					});

					this.loadData();
				}
			}
		);
	}

	ngOnInit() {
		this.loadData();
	}

	loadData(): void {
		this.bookService.getAll();
	}

	openModalInsert(event: Event): void {
		event.preventDefault();
		this.bsModalRef = this.modalService.show(BooksModalInsertComponent);
		this.bsModalRef.content.title = 'Adicionar livro';
	}
}
