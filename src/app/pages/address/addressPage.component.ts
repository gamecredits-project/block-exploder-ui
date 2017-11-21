import {Component, OnInit} from '@angular/core';
import {AddressPageService} from './addressPage.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Globals } from '../globals';

import 'rxjs/add/operator/switchMap';

@Component({
  selector   : 'exploder-adress',
  templateUrl: 'addressPage.component.html'
})
export class AddressPageComponent implements OnInit {

  address: string = '';
  allTransactions: any = [];
  unspent: any = [];
  selectedTrancationsTagName: string = 'All Transactions';
  transactionsTagNumber: number = 0;
  volume: number = 0;
  price: number;
  nextTransactionsPageLink: string = '';
  nextUnspentTransactionsPageLink: string = '';
  currentValue: number = 0;
  totalTransactionsNumber: number = 0;
  currentLocation: string = 'www.blockexplorer.gamecredits.com';

  constructor(private addressPageService: AddressPageService,
              private route: ActivatedRoute,
              private router: Router,
              public globals: Globals
  ) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.address = '' + params['hash'];
    });

    this.currentLocation = window.location.href;

    this.route.params
      .switchMap((params: Params) => this.addressPageService.getAddressAllTransactions('' + params['hash']))
      .subscribe(resp => {
        this.allTransactions = resp.transactions;
        this.nextTransactionsPageLink = resp.next;
        this.setMenu('All Transactions');
      });

    this.route.params
      .switchMap((params: Params) => this.addressPageService.getAddressUnspent('' + params['hash']))
      .subscribe(resp => {
        this.nextUnspentTransactionsPageLink = resp.next;
        this.unspent = resp.utxo;
      });

    this.route.params
      .switchMap((params: Params) => this.addressPageService.getAddressVolume('' + params['hash']))
      .subscribe(resp => {
        this.volume = Number(resp.volume);
        isNaN(this.volume) ? this.volume = 0 : this.volume = resp.volume;
      });

    this.route.params
      .switchMap((params: Params) => this.addressPageService.getAddressTotalTransactionsNumber('' + params['hash']))
      .subscribe(resp => {
        this.totalTransactionsNumber = Number(resp.transactionCount);
        isNaN(this.totalTransactionsNumber) ? this.totalTransactionsNumber = 0 : this.totalTransactionsNumber = resp.transactionCount;
      });

    this.route.params
      .switchMap((params: Params) => this.addressPageService.getAddressBalance('' + params['hash']))
      .subscribe(resp => {
        this.currentValue = Number(resp.balance);
        isNaN(this.currentValue) ? this.currentValue = 0 : this.currentValue = resp.balance;
      });
  }


  setMenu(name: string) {
    this.selectedTrancationsTagName = name;
    if (name == 'All Transactions') {
      this.transactionsTagNumber = this.allTransactions ? this.allTransactions.length : 0;
    } else if (name == 'Unspent Transactions') {
      this.transactionsTagNumber = this.unspent ? this.unspent.length : 0;
    }
  }

  loadMoreTransactions() {
    this.addressPageService.getNextTransactions(this.nextTransactionsPageLink).subscribe((resp) => {
      this.allTransactions = this.allTransactions.concat(resp.transactions);
      this.nextTransactionsPageLink = resp.next;
      this.transactionsTagNumber = this.allTransactions.length;
    });
  }
}
