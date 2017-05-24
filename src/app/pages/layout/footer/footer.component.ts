import { Component, OnInit } from '@angular/core';
import { FooterService } from "./footer.service"; 

@Component ({
	selector: 'exploder-footer',
	templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
	latestTransactions: any = [];

	constructor(private footerService: FooterService, 
		) {}


	ngOnInit() {
		this.footerService.getLatestTransactions().subscribe( (resp) => {
			this.latestTransactions = resp;
		});
	}
}