import { Component, OnInit } from '@angular/core';
import { AddressPageService } from "./addressPage.service";
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

 @Component ({
 	selector: 'exploder-adress',
 	templateUrl: 'addressPage.component.html'
 })
 export class AddressPageComponent implements OnInit {

 	allTransactions: any;
 	unspent: any;
 	selectedTrancationsTagName: string = "All Transactions";
 	transactionsTagNumber: number = 0;

 	constructor(private addressPageService: AddressPageService, 
 		private route: ActivatedRoute
		) {}

 	ngOnInit() {
 		this.route.params
 			.switchMap((params: Params) => this.addressPageService.getAddressAllTransactions('' + params['hash']))
 			.subscribe( resp => {
 				this.allTransactions = resp;
 				this.setMenu('All Transactions');
 			});

 		this.route.params
 			.switchMap((params: Params) => this.addressPageService.getAddressUnspent('' + params['hash']))
 			.subscribe( resp => {
 				this.unspent = resp;
 			});
 	}
 	

 	setMenu(name: string) {
 		this.selectedTrancationsTagName = name;
 		if (name == 'All Transactions') {
 			this.transactionsTagNumber = this.allTransactions ? this.allTransactions.length : 0;
 		} else if (name == 'Unspent Transactions') {
 			this.transactionsTagNumber = 0; // FIX THIS AFTER DIVIC FIXES BACKEND 
 		}
 	}
 }