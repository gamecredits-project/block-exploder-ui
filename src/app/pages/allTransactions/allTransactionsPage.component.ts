import {Component, OnInit, OnDestroy} from '@angular/core';
import {AllTransactionsPageService} from './allTransactionsPage.service';
import {TxSocketService} from '../socket/socket.service';
import {BlockSocketService} from '../socket/socket.service';
import { Globals } from '../globals';
@Component({
  selector   : 'exploder-transactions',
  templateUrl: 'allTransactionsPage.component.html',
  providers  : [TxSocketService, BlockSocketService]
})

export class AllTransactionsPageComponent implements OnInit, OnDestroy {

  txArray: any = [];
  currentlyLoaded: number = 0;
  loadPerScroll: number = 30;

  private socket: any;
  private tx_response: any;
  private tx_test: any;

  public txs: any;
  public block_test: any;
  private tx_data: any;


  constructor(private allTransactionsPageService: AllTransactionsPageService,
              private txSocketService: TxSocketService,
              public globals: Globals) {
    this.txs = [];
  }

  ngOnInit() {
    this.addTransactions();

    this.socket = this.txSocketService.initConnection();
    this.getTxInitMessage();
    this.getSocketTx();
  }

  ngOnDestroy() {
    this.socket.unsubscribe();
  }

  addTransactions() {
    this.allTransactionsPageService.getLatestTransactions(this.loadPerScroll, this.currentlyLoaded).subscribe((resp) => {
      this.txArray = this.txArray.concat(resp);
    });
    this.currentlyLoaded += this.loadPerScroll;
  }

  onScroll() {
    this.addTransactions();
  }

  private getTxInitMessage(): void {
    this.socket = this.txSocketService.getTxConnection().subscribe((tx_response) => {
      this.tx_test = tx_response;
    });
  }

  private getSocketTx(): void {
    this.socket = this.txSocketService.getTx().subscribe((tx_data) => {
      this.txs.push(tx_data);
    });
  }


  calulateMinutesFromNow(time: number) {
    let now = new Date();
    let minutesOld = Math.abs(Math.round((now.valueOf() / 1000 - time) / 60));
    let message = '';
    let days = Math.floor(minutesOld / (60 * 24));
    let hours = Math.floor(( minutesOld - days * 60 * 24 ) / 60);
    let minutes = minutesOld % 60;

    message += minutes + 'm ';

    if (hours || days) {
      message += hours + 'h ';
    }

    if (days) {
      message += days + 'd ';
    }

    return message;
  }
}
