
import {Directive, ElementRef, Input, Output, OnChanges, EventEmitter} from '@angular/core';
declare var google: any;
declare var googleLoaded: any;
declare var googleChartsPackagesToLoad: any;
@Directive({
    selector: '[GoogleChart]',
    // properties: [
    //     'chartType',
    //     'chartOptions',
    //     'chartData'
    //   ]
})

export class GoogleChart implements OnChanges {
  public _element:any;
  @Input('chartType') public chartType:string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;
  @Output('ready') ready:EventEmitter<any> = new EventEmitter<any>();
  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }
  ngOnChanges() {
    if(!googleLoaded) {
      googleLoaded = true;
    google.charts.load('current', {'packages':['corechart', 'gauge']['orgchart']});
     }
    this.drawGraph(this.chartOptions,this.chartType,this.chartData,this._element, this.ready);
  } 
  drawGraph (chartOptions,chartType,chartData,ele, ready) {
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var wrapper;
       wrapper = new google.visualization.ChartWrapper({
             chartType: chartType,
             dataTable:chartData ,
             options:chartOptions || {}
           });

      google.visualization.events.addListener(wrapper, 'error', function (googleError) {
          google.visualization.errors.removeError(googleError.id);
      });

      wrapper.draw(ele);
      ready.emit(); // customized this shit because divic wanted the dummy graph to be "blured" before the real one had loaded, and i added an event so i could know when to swap
    }
}
}
