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
 	allTransactions:any = [];
 	unspent: any = [];
 	selectedTrancationsTagName: string = "All Transactions";
 	transactionsTagNumber: number = 0;
 	volume: number = 0;
 	price: number;
 	nextTransactionsPageLink: string = '';
 	currentValue: number = 0;
 	totalTransactionsNumber: number = 0;

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
 				this.allTransactions = resp.transactions;
 				this.nextTransactionsPageLink = resp.next;
 				this.setMenu('All Transactions');
 			});

 		this.route.params
 			.switchMap((params: Params) => this.addressPageService.getAddressUnspent('' + params['hash']))
 			.subscribe( resp => {
 				let i;
 				for (i = 0; i < resp.length; i++){
					let item = resp[i];
					item.vin = Array.from(resp[i].vin);
					this.unspent.push(item); 					
 				}


 				console.log(this.unspent);
 			});

 		this.route.params
 			.switchMap((params: Params) => this.addressPageService.getAddressVolume('' + params['hash']))
 			.subscribe( resp => {
 				this.volume = Number(resp);
 				isNaN(this.volume) ? this.volume = 0 : this.volume = resp;
 			});

 		this.route.params
 			.switchMap((params: Params) => this.addressPageService.getAddressTotalTransactionsNumber('' + params['hash']))
 			.subscribe( resp => {
 				this.totalTransactionsNumber = Number(resp);
 				isNaN(this.totalTransactionsNumber) ? this.totalTransactionsNumber = 0 : this.totalTransactionsNumber = resp;
 			});

 		this.route.params
 			.switchMap((params: Params) => this.addressPageService.getAddressBalance('' + params['hash']))
 			.subscribe( resp => {
 				this.currentValue = Number(resp);
 				isNaN(this.currentValue) ? this.currentValue = 0 : this.currentValue = resp;
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
		this.addressPageService.getNextTransactions(this.nextTransactionsPageLink).subscribe( (resp) => {
			this.allTransactions = this.allTransactions.concat(resp.transactions);
			this.nextTransactionsPageLink = resp.next;
			this.transactionsTagNumber = this.allTransactions.length;
		});
 	}
 }