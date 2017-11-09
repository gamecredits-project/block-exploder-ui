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
  	zoom: number = 3;
  	markers: any[] = [];
    peersToShow: any[] = [];
	showButton: boolean = false;
	
	mapStyle: any[] = [
		{
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#212121"
			}
		  ]
		},
		{
		  "elementType": "labels",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "elementType": "labels.icon",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#212121"
			}
		  ]
		},
		{
		  "featureType": "administrative",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "administrative.country",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "administrative.country",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		},
		{
		  "featureType": "administrative.land_parcel",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "administrative.locality",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "administrative.locality",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#bdbdbd"
			}
		  ]
		},
		{
		  "featureType": "administrative.neighborhood",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "administrative.province",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "landscape.man_made",
		  "stylers": [
			{
			  "color": "#1d2c37"
			},
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural",
		  "stylers": [
			{
			  "color": "#1d2c37"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural",
		  "elementType": "geometry.fill",
		  "stylers": [
			{
			  "color": "#1d2c37"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural.landcover",
		  "stylers": [
			{
			  "color": "#1d2c37"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural.landcover",
		  "elementType": "geometry.fill",
		  "stylers": [
			{
			  "color": "#1d2c37"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural.landcover",
		  "elementType": "geometry.stroke",
		  "stylers": [
			{
			  "color": "#1d2c37"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural.terrain",
		  "stylers": [
			{
			  "color": "#253542"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural.terrain",
		  "elementType": "geometry.fill",
		  "stylers": [
			{
			  "color": "#1d2c37"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "poi.attraction",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "poi.business",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "poi.government",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#181818"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#1b1b1b"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "geometry.fill",
		  "stylers": [
			{
			  "color": "#2c2c2c"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#8a8a8a"
			}
		  ]
		},
		{
		  "featureType": "road.arterial",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "road.arterial",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#373737"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#3c3c3c"
			}
		  ]
		},
		{
		  "featureType": "road.highway.controlled_access",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#4e4e4e"
			}
		  ]
		},
		{
		  "featureType": "road.local",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "road.local",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "featureType": "transit",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#000000"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "geometry.fill",
		  "stylers": [
			{
			  "color": "#253542"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#3d3d3d"
			}
		  ]
		}
	  ];

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
    this.showButton = false;
  }
 }