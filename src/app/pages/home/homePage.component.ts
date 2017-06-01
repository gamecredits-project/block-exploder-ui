import { Component, OnInit } from '@angular/core';
import { HomePageService } from "./homePage.service";

 @Component ({
 	selector: 'exploder-home',
 	templateUrl: 'homePage.component.html'
 })
 export class HomePageComponent implements OnInit {

 	latestBlocks: any = [];
 	networkInfo: any = [];
 	bootstrapLink: any = [];
    showPlaceholder: boolean = true;

    public line_ChartData:any = [];


    public line_ChartOptions = {
        curveType: 'function',
        height: 400,
        vAxis: {baselineColor: '#CCCCCC', gridlines: { count: 13, color: '#dddddd'} , textStyle: {color: 'white'}},
        hAxis: {format: 'd, MMM', baselineColor: '#CCCCCC', gridlines: { count: 11, color: '#bbbbbb' }, minorGridlines: {  color: 'red' }, textStyle: {color: 'white'}},
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
        
	constructor(private homePageService: HomePageService, 
		) {}

 	ngOnInit() {
 		this.homePageService.getLatestBlocks().subscribe( (resp) => {
			this.latestBlocks.push(...resp);
		});

		this.homePageService.getNetworkInfo().subscribe( (resp) => {
			this.networkInfo = resp;
		});

		this.homePageService.getBootstrapLink().subscribe( (resp) => {
			this.bootstrapLink = resp;
		});

		this.homePageService.getHashrates().subscribe( (resp) => {
			this.line_ChartData.push(['Date','Network Hashrate']);
			for (let index = 0; index < resp.length; ++index) {
			    this.line_ChartData.push([ new Date(resp[index].timestamp * 1000),resp[index].hashrate / 1000000000]);
			}
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
 }