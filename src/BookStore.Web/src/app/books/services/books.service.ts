import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Book } from '../models/book';
import { environment } from '../../../environments/environment.prod';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';


@Injectable()
export class BooksService {
	private list = new Subject<Book[]>();
	list$ = this.list.asObservable();

	private loadingList = new BehaviorSubject<boolean>(false);
	loadingList$ = this.loadingList.asObservable();

	private inserted = new BehaviorSubject<boolean>(false);
	inserted$ = this.inserted.asObservable();

	private updated = new BehaviorSubject<boolean>(false);
	updated$ = this.updated.asObservable();

	private deleted = new BehaviorSubject<boolean>(false);
	deleted$ = this.deleted.asObservable();

	private headers = new Headers({
		'Content-Type': 'application/json'
	});

	constructor(private http: Http) { }


	getAll(): void {
		this.loadingList.next(true);

		this.http.get(environment.serviceUrl + 'v1/books')
			.map((res: Response) => this.list.next(res.json()))
			.finally(() => this.loadingList.next(false))
			.catch((error: any) => {
				this.list.error(new Error(error || 'Server error'));
				return Observable.throw(error.json().error || 'Server error');
			}).subscribe();
	}

	add(book: Book): Observable<void> {
		return this.http
			.post(environment.serviceUrl + 'v1/books', book, { headers: this.headers })
			.map((res: Response) => this.inserted.next(true));
	}

	update(book: Book): Observable<void> {

		console.log(book);

		return this.http
			.put(environment.serviceUrl + `v1/books/${book.isbn}`, book, { headers: this.headers })
			.map((res: Response) => this.updated.next(true));
	}

	delete(book: Book): Observable<void> {

		if (!confirm('Deseja realmente deletar?')) {
			return;
		}

		return this.http
			.delete(`${environment.serviceUrl}v1/books/${book.isbn}`, { headers: this.headers })
			.map((res: Response) => this.deleted.next(true));
	}
}
