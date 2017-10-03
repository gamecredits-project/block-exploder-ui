import {Component, OnInit, OnDestroy} from '@angular/core';
import { BlocksPageService } from "./blocksPage.service";
import { BlockSocketService } from "app/pages/socket/socket.service";
import {Subscription} from "rxjs";

@Component ({
 	selector: 'exploder-blocks',
 	templateUrl: 'blocksPage.component.html',
  providers: [BlockSocketService]
})

export class BlocksPageComponent implements OnInit, OnDestroy {

 	blockArray: any = [];
 	currentlyLoaded: number = 0;
 	loadPerScroll: number = 30;

  private socket: any;
  private block_response: any;
  public block_test: any;

  public blocks: any;
  private block_data: any;


 	constructor(private blocksPageService: BlocksPageService, private blockSocketService: BlockSocketService) {
    this.blocks = [];
  }

 	ngOnInit() {
    this.addBlocks();

    this.socket = this.blockSocketService.initConnection();

    this.getBlockInitMessage();
    this.getSocketBlock();
 	}

  ngOnDestroy(){
    this.socket.unsubscribe();
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

  private getBlockInitMessage(): void {
    this.socket = this.blockSocketService.getBlockConnection().subscribe((block_response) =>{
      this.block_test = block_response
    });
  }

  private getSocketBlock(): void {
    this.socket = this.blockSocketService.getBlock().subscribe((block_data) =>{
      this.blocks.push(block_data);
    });
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
