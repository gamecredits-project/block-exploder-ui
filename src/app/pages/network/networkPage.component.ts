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
   	lat: number = 31.678418;
  	lng: number = 7.809007;
  	prva: number = 53.678418;
  	druga: number = 89.809007;
  	zoom: number = 1;
  	markers: any[] = [];
    peersToShow: any[] = [];
    showButton: boolean = false;

 	constructor(private networkPageService: NetworkPageService
		) {}

 	ngOnInit() {
		this.networkPageService.getNetworkInfo().subscribe( (resp) => {
			this.networkInfo = resp;
		});

		this.networkPageService.getClientInfo().subscribe( (resp) => {
			this.clientInfo = resp;
      this.peersToShow = this.clientInfo.peerInfo.slice(0,5);
      this.showButton= true;
		});
 	}

  showAll(){
    this.peersToShow = this.clientInfo.peerInfo;
    
  }
 }