import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable()
export class UttilityService {
  barGraph:any =  {
    chart: {
      type: 'column'
    },
    title: {
      text: 'This week'
    },
    // subtitle: {
    //   text: 'Source: WorldClimate.com'
    // },
    xAxis: {
      categories: [
        'Oct 24',
        'Oct 25',
        'Oct 26',
        'Oct 27',
        'Oct 28',
        'Oct 29',
        'Oct 30',

      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'feet'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} feet</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    colors: [
      'blue', 
      'green' ],
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Ullabie',
      data: [
       49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 
      //  148.5, 216.4, 194.1, 95.6, 54.4
      ]
  
    }, {
      name: 'Ningulabie',
      data: [
        83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 
        // 104.3, 91.2, 83.5, 106.6, 92.3
      ]
  
    },
    //  {
    //   name: 'London',
    //   data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
  
    // }, 
    // {
    //   name: 'Berlin',
    //   data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    // }
  ]
  }
  defaultOptions:any = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Productivity chart (October 2023)'
    },
    tooltip: {
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  color: 'black'
                }
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Aquila',
            y: 15
        }, {
            name: 'Yuvaraj',
            y: 25
        }, {
            name: 'Chandra Kala',
            y: 40
        }, {
            name: 'Headwin',
            y: 20
        }]
    }]
}
  constructor() { }
  
  createChart(container:any, isBargraph:boolean = false) {
    let opts =  isBargraph ? this.barGraph : this.defaultOptions;
    console.log(opts)
    let e = document.createElement("div");
    
    container.appendChild(e);
    
    if(opts.chart) {
     // opts.chart['renderTo'] = e;
    }
    Highcharts.chart(container, opts);
  }

}
