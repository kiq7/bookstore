import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
	currentRoute: String;

	constructor(private router: Router) {
		this.router.events.subscribe( event => {
			if (event instanceof NavigationEnd) {
				this.currentRoute = this.router.url;
			}
		});
	}

	ngOnInit() {
	}
}
