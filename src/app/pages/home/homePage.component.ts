import { Component, OnInit } from '@angular/core';
import { HomePageService } from "./homePage.service";

 @Component ({
 	selector: 'exploder-home',
 	templateUrl: 'homePage.component.html'
 })
 export class HomePageComponent implements OnInit {
 	latestBlocks: any = [];

	constructor(private homePageService: HomePageService, 
		) {}

 	ngOnInit() {
 			this.homePageService.getLatestBlocks().subscribe( (resp) => {
			this.latestBlocks = resp;
		});

 	}

 	calulateMinutesFromNow( time: number) {
 		let now = new Date();
 		return Math.abs( Math.round( (now.valueOf() / 1000 - time) / 60 ) );
 	}
 }