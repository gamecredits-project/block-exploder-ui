import {Component, OnInit, OnDestroy} from '@angular/core';
import { HomePageService } from "./homePage.service";
import { Router } from '@angular/router';
import { BlockSocketService } from "app/pages/socket/socket.service";
import { Globals } from "./../globals";

 @Component ({
 	selector: 'exploder-home',
 	templateUrl: 'homePage.component.html',
  providers: [BlockSocketService]
 })
 export class HomePageComponent implements OnInit, OnDestroy {

  latestBlocks: any = [];
  latestTransactions: any = [];
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
        vAxis: {baselineColor: '#CCCCCC', gridlines: { count: 13, color: '#2d3c49', opacity:0.13} , textStyle: {color: '#808080'}},
        hAxis: {format: 'd. MMM', baselineColor: '#1D2E3B', gridlines: { count: 10, color: '#1D2E3B', opacity:0.13 }, minorGridlines: {  color: 'red' }, textStyle: {color: '#808080'}},
        chartArea: {left:40,top:20,width:'95%',height:'80%'},
        backgroundColor: '#1D2E3B',
        yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                    , color: 'red'
                }],
        colors: ['#dddddd'],
        pointSize: 8,
        dataOpacity: 0.5
    };


  public line_ChartOptions2 = {
      curveType: 'function',
      height: 400,
      vAxis: {baselineColor: '#dddddd', gridlines: { count: 13, color: '#dddddd'} , textStyle: {color: '#bbbbbb'}},
      hAxis: {format: 'd. MMM', baselineColor: '#f7faff', gridlines: { count: 10, color: '#f7faff', opacity:0.13 }, minorGridlines: {  color: 'f7faff' }, textStyle: {color: '#bbbbbb'}},
      chartArea: {left:40,top:20,width:'95%',height:'80%'},
      backgroundColor: '#f7faff',
      yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
                  , color: 'red'
              }],
      colors: ['#1344dd'],
      pointSize: 8,
      dataOpacity: 0.5
  };

  private socket: any;
  private block_response: any;
  private block_test: any;

  private blocks: any;
  private block_data: any;
  private test: any;

	constructor(private homePageService: HomePageService, private router: Router, private blockSocketService: BlockSocketService, public globals: Globals) {
    this.blocks = [];
  }


 	ngOnInit() {

    this.socket = this.blockSocketService.initConnection();
    this.getBlockInitMessage();
    this.getSocketBlock();

 		this.homePageService.getLatestBlocks().subscribe( (resp) => {
			this.latestBlocks.push(...resp);
		});

    this.homePageService.getLatestTransactions().subscribe( (resp) => {
			this.latestTransactions.push(...resp);
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

  public buildWave(w, h):any {

      var pathData: any;
      var a = h / 4;
      var y = h / 2;
      var m = 0.512286623256592433;

      return pathData = ['M', w * 0, y + a / 2, 'c', a * m, 0, -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a].join(' ');

      // path.setAttribute('d', pathData);
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


 }
