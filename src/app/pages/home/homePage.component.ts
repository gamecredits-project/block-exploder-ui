import {Component, OnInit, OnDestroy} from '@angular/core';
import { HomePageService } from "./homePage.service";
import { Router } from '@angular/router';
import { BlockSocketService } from "app/pages/socket/socket.service";

 @Component ({
 	selector: 'exploder-home',
 	templateUrl: 'homePage.component.html',
  providers: [BlockSocketService]
 })
 export class HomePageComponent implements OnInit, OnDestroy {

 	latestBlocks: any = [];
 	networkInfo: any = [];
 	bootstrapLink: any = [];
  price: number;
  clientInfo: any = [];
  data: any = {};
  showPlaceholder: boolean = true;

  public line_ChartData:any = [];
  tempLineChartData: any = [];

  public line_ChartOptions = {
        curveType: 'function',
        height: 400,
        vAxis: {baselineColor: '#CCCCCC', gridlines: { count: 13, color: '#dddddd'} , textStyle: {color: 'white'}},
        hAxis: {format: 'd. MMM', baselineColor: '#CCCCCC', gridlines: { count: 10, color: '#bbbbbb' }, minorGridlines: {  color: 'red' }, textStyle: {color: 'white'}},
        chartArea: {left:40,top:40,width:'90%',height:'80%'},
        backgroundColor: '#33A579',
        yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                    , color: 'red'
                }],
        legend: {
            position: 'top', textStyle: {color: 'white', fontSize: 16}, alignment: 'center', opacity: 0.1
        },
        colors: ['white'],
        pointSize: 8,
        dataOpacity: 0.5
    };

  private socket: any;
  private block_response: any;
  private block_test: any;

  private blocks: any;
  private block_data: any;
  private test: any;

	constructor(private homePageService: HomePageService, private router: Router, private blockSocketService: BlockSocketService) {
    this.blocks = [];
  }


 	ngOnInit() {
    this.socket = this.blockSocketService.initConnection();
    this.getBlockInitMessage();
    this.getSocketBlock();

 		this.homePageService.getLatestBlocks().subscribe( (resp) => {
			this.latestBlocks.push(...resp);
		});

    this.homePageService.getNetworkPrice().subscribe( (resp) => {
      this.price = resp.priceUSD;
    });


		this.homePageService.getNetworkInfo().subscribe( (resp) => {
			this.networkInfo = resp;
		});

    this.homePageService.getClientInfo().subscribe( (resp) => {
      this.clientInfo = resp;
    });


		this.homePageService.getBootstrapLink().subscribe( (resp) => {
			this.bootstrapLink = resp;
		});

		this.homePageService.getHashrates().subscribe( (resp) => {

			this.tempLineChartData.push(['Date','Network Hashrate']);
			for (let index = 0; index < resp.length; ++index) {
			    this.tempLineChartData.push([ new Date(resp[index].timestamp * 1000),resp[index].hashrate / 1000000000]);
          this.line_ChartData = this.tempLineChartData;
			}
            this.line_ChartData = this.tempLineChartData; // Change dependant vaulue only once ( so we dont trriger onChange in directive multiple times)
		});
 	}

   ngOnDestroy(){
     this.socket.unsubscribe();
   }

  onResize() {
    this.homePageService.getHashrates().subscribe( (resp) => {

      this.tempLineChartData.push(['Date','Network Hashrate']);
      this.line_ChartData = [];
      for (let index = 0; index < resp.length-12; ++index) {
          this.tempLineChartData.push([ new Date(resp[index].timestamp * 1000),resp[index].hashrate / 1000000000]);
          this.line_ChartData = this.tempLineChartData;
      }

             // Change dependant vaulue only once ( so we dont trriger onChange in directive multiple times)
    });
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

    hidePlaceholder() {
      this.showPlaceholder = false;
    }

    onSearch(param: string) {
        this.homePageService.getSearchItemType(param).subscribe( (resp) => {
            if(resp.type == 'block') {

                // check if search param is integer
                if (!isNaN(resp.searchBy)){
                 this.homePageService.getBlockHashByHeight(resp.searchBy).subscribe(data => {
                   this.router.navigateByUrl('blocks/' + data['hash']);
                 })
               }else{
                 this.router.navigateByUrl('blocks/' + resp.searchBy);
               }

            } else if(resp.type == 'address') {
                this.router.navigateByUrl('addresses/' + resp.searchBy);
                // console.log(resp.searchBy);
            } else if(resp.type == 'transaction') {
                this.router.navigateByUrl('transactions/' + resp.searchBy);
            }
        });
    }
 }
