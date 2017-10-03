import {Component, OnInit, OnDestroy} from '@angular/core';
import { FooterService } from "./footer.service";
import { TxSocketService } from "app/pages/socket/socket.service";

@Component ({
	selector: 'exploder-footer',
	templateUrl: 'footer.component.html',
	providers: [TxSocketService]
})

export class FooterComponent implements OnInit, OnDestroy {
	latestTransactions: any = [];

	private socket: any;
	private tx_test: any;
	private tx_response: any;

	public txs: any;
  private tx_data: any;

	constructor(private footerService: FooterService,private txSocketService: TxSocketService) {
		this.txs = [];
	}

	ngOnInit() {
		this.socket = this.txSocketService.initConnection();
		this.getTxInitMessage();
		this.getTx();

		this.footerService.getLatestTransactions().subscribe( (resp) => {
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
	 this.socket = this.txSocketService.getTx().subscribe((tx_data) =>{
		 this.txs.push(tx_data);
		 if (this.txs.length > 5){
			 this.txs.shift();
		 }
		 this.latestTransactions.shift();
	 });
 }
}
