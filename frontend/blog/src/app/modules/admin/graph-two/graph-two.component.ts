import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph-two',
  templateUrl: './graph-two.component.html',
  styleUrls: ['./graph-two.component.css']
})
export class GraphTwoComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
      },
      title: {
          text: 'MOST BUYING PRODUCTS',
          align: 'left'
      },
      subtitle: {
          text: 'Source: ' +
              '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
              'target="_blank">Counterpoint Research</a>',
          align: 'left'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
      series: [{
          type: 'pie',
          name: 'Share',
          data: [
              ['ADIDDAS', 23],
              ['PUMA', 18],
              {
                  name: 'NEWBALANCE',
                  y: 12,
                  sliced: true,
                  selected: true
              },
              ['VANS*', 9],
              ['REDTAPE', 8],
              ['NIKE', 30]
          ]
      }]
    }
  }
}
