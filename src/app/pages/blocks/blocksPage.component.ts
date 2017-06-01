import { Component, OnInit } from '@angular/core';
import { BlocksPageService } from "./blocksPage.service";

 @Component ({
 	selector: 'exploder-blocks',
 	templateUrl: 'blocksPage.component.html'
 })
 export class BlocksPageComponent implements OnInit {

 	blockArray: any = [];
 	currentlyLoaded: number = 0;
 	loadPerScroll: number = 30;

 	constructor(private blocksPageService: BlocksPageService, 
		) {}

 	ngOnInit() {
 		this.addBlocks();
 	}

 	addBlocks(){
 		this.blocksPageService.getBlocks(this.loadPerScroll, this.currentlyLoaded).subscribe( (resp) => {
			this.blockArray = this.blockArray.concat(resp);
		});
		this.currentlyLoaded += this.loadPerScroll;
 	}

 	onScroll() {
 		this.addBlocks();
 	}

 	calulateMinutesFromNow( time: number) {
 		let now = new Date();
 		let minutesOld = Math.abs( Math.round( (now.valueOf() / 1000 - time) / 60 ) );
 		let message = '';
 		let days = Math.floor(minutesOld / (60 * 24) );
 		let hours = Math.floor( ( minutesOld - days * 60 * 24 ) / 60 );
 		let minutes = minutesOld % 60;


 		message += minutes + ' m ';

 		if(hours || days) {
 			message += hours + ' h ';
 		}

 		if(days) {
 			message += days + ' d ';
 		}

 		return message;
 	}
 }