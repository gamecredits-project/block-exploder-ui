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

    public line_ChartData = [
        ['Date', 'Network Hash Rate'],
        [new Date(2015, 1, 1), 3],
        [new Date(2015, 1, 3), 2],
        [new Date(2015, 1, 5), 4],
        [new Date(2015, 1, 7), 5],
        [new Date(2015, 1, 11), 6],
        [new Date(2015, 1, 13), 8],
        [new Date(2015, 1, 14), 12],
        [new Date(2015, 1, 16), 14],
        [new Date(2015, 1, 17), 15]];


    public line_ChartOptions = {
        curveType: 'function',
        height: 400,
        vAxis: {baselineColor: '#CCCCCC', gridlines: { count: 12, color: '#dddddd'} , textStyle: {color: 'white'}},
        hAxis: {format: 'd, MMM', baselineColor: '#CCCCCC', gridlines: { count: 10, color: '#bbbbbb' }, minorGridlines: {  color: 'red' }, textStyle: {color: 'white'}},
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
			this.latestBlocks = resp;
		});

		this.homePageService.getNetworkInfo().subscribe( (resp) => {
			this.networkInfo = resp;
		});

		this.homePageService.getBootstrapLink().subscribe( (resp) => {
			this.bootstrapLink = resp;
		});
 	}

 	calulateMinutesFromNow( time: number) {
 		let now = new Date();
 		let minutesOld = Math.abs( Math.round( (now.valueOf() / 1000 - time) / 60 ) );
 		let message = '';
 		message += minutesOld % 60 + ' min';
 		if (minutesOld > 59) {
 			message += minutesOld / 60 +' H';
 		}
 		return message;
 	}
 }