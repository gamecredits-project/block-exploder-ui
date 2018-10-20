import {Component, OnInit, OnDestroy} from '@angular/core';
import {FooterService} from './footer.service';
import {TxSocketService} from '../../socket/socket.service';
import { Globals } from '../../globals';
import {AppSettings} from '../../../appSettings';

@Component({
  selector   : 'exploder-footer',
  templateUrl: 'footer.component.html',
  styleUrls  : ['./footer.style.css'],
  providers  : [TxSocketService],
})

export class FooterComponent implements OnInit, OnDestroy {
  latestTransactions: any = [];

  private socket: any;
  private tx_test: any;
  private tx_response: any;

  public txs: any;
  private tx_data: any;

  apiDocsUrl: string;
  appWebsite: string;

  constructor(private footerService: FooterService, private txSocketService: TxSocketService, public globals: Globals) {
    this.txs = [];
  }

  ngOnInit() {
    this.socket = this.txSocketService.initConnection();
    this.getTxInitMessage();
    this.getTx();
    this.apiDocsUrl = AppSettings.API_DOCS_URL;
    this.appWebsite = AppSettings.APP_WEBSITE;

    this.footerService.getLatestTransactions().subscribe((resp) => {
      this.latestTransactions = resp;
    });
  }

  ngOnDestroy() {
    this.socket.unsubscribe();
  }

  private getTxInitMessage(): void {
    this.socket = this.txSocketService.getTxConnection().subscribe((tx_response) => {
      this.tx_test = tx_response;
    });
  }

  private getTx(): void {
    this.socket = this.txSocketService.getTx().subscribe((tx_data) => {
      this.txs.push(tx_data);
      if (this.txs.length > 5) {
        this.txs.shift();
      }
      this.latestTransactions.shift();
    });
  }
}
