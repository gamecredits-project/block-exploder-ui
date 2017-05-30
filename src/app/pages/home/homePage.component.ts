import { Component, OnInit } from '@angular/core';
import { HomePageService } from "./homePage.service";

 @Component ({
 	selector: 'exploder-home',
 	templateUrl: 'homePage.component.html'
 })
 export class HomePageComponent implements OnInit {
 	latestBlocks: any = [];
    public line_ChartData = [
        ['Year', 'Sales'],
        ['2004', 1000],
        ['2005', 1170],
        ['2006', 660],
        ['2007', 1030]];


    public line_ChartOptions = {
        title: 'Network Hash Rate',
        curveType: 'function',
        height: 400,
        chartArea: {left:40,top:40,width:'80%',height:'80%'},
        backgroundColor: '#33A579',
        vAxis: { ticks: [100,200,300,400,500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500] },
        hAxis: { ticks: [2002,2004, 2005, 2006, 2007, 2008, 2009] },
        legend: {
            position: 'bottom'
        }
    };
        
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