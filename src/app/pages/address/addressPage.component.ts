import { Component, OnInit } from '@angular/core';
import { AddressPageService } from "./addressPage.service";
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

 @Component ({
 	selector: 'exploder-adress',
 	templateUrl: 'addressPage.component.html'
 })
 export class AddressPageComponent implements OnInit {

 	address: string = '';
 	allTransactions: any;
 	unspent: any;
 	selectedTrancationsTagName: string = "All Transactions";
 	transactionsTagNumber: number = 0;
 	volume: number = 0;
 	price: number;

 	constructor(private addressPageService: AddressPageService, 
 		private route: ActivatedRoute
		) {}

 	ngOnInit() {

 		this.route.params.subscribe((params: Params) => {
		        this.address = '' + params['hash']
		 });


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

 		this.route.params
 			.switchMap((params: Params) => this.addressPageService.getAddressVolume('' + params['hash']))
 			.subscribe( resp => {
 				this.volume = resp;
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

 	loadMoreTransactions() {
 		 this.route.params
 			.switchMap((params: Params) => this.addressPageService.getAddressAllTransactions('' + params['hash']))
 			.subscribe( resp => {
 				this.allTransactions = resp;
 			});
 	}
 }