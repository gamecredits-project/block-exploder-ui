import { Component, OnInit } from '@angular/core';
import { FooterService } from "./footer.service";
import { TxSocketService } from "app/pages/socket/socket.service";

@Component ({
	selector: 'exploder-footer',
	templateUrl: 'footer.component.html',
	providers: [TxSocketService]
})
export class FooterComponent implements OnInit {
	latestTransactions: any = [];


	private socket: any;
	private tx_test: any;
	private tx_response: any;

	private txs: any;
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

	private getTxInitMessage(): void {
	    this.socket = this.txSocketService.getTxConnection().subscribe((tx_response) => {
	      this.tx_test = tx_response;
	    });
	  }

	private getTx(): void {
	 this.socket = this.txSocketService.getTx().subscribe((tx_data) =>{
		 this.txs.push(tx_data);
	 });
 }


}
