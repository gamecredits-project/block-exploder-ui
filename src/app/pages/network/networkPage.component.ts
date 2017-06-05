import { Component, OnInit } from '@angular/core';
import { NetworkPageService } from "./networkPage.service";

import 'rxjs/add/operator/switchMap';

 @Component ({
 	selector: 'exploder-network',
 	templateUrl: 'networkPage.component.html'
 })
 export class NetworkPageComponent implements OnInit {

    networkInfo: any;
    clientInfo: any;
   	lat: number = 51.678418;
  	lng: number = 7.809007;
 	constructor(private networkPageService: NetworkPageService
		) {}

 	ngOnInit() {
		this.networkPageService.getNetworkInfo().subscribe( (resp) => {
			this.networkInfo = resp;
		});

		this.networkPageService.getClientInfo().subscribe( (resp) => {
			this.clientInfo = resp;
		});
 	}
 }