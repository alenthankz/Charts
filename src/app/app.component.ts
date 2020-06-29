import { Component } from '@angular/core';
import { Color,SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {ChartDataSets, ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public doughnutChartLabels:Label[] =['sales Q1','sales Q2','sales Q3','sales Q4']

  public doughnutChartData:SingleDataSet =[
      25,25,25,25
  ]

  public doughnutChartType:ChartType='doughnut'


  // ---------------------------------------------------
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['sales Q1','sales Q2','sales Q3','sales Q4'];
  public pieChartData: SingleDataSet = [25,25,25,25];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  //-------------------------------------------------------
 
  //--------------------------------------------
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] =['sales Q1','sales Q2','sales Q3','sales Q4'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [120, 150, 180,0], label: 'undefined' },
  ];
//-------------------------------------------------------
 
elements: any = [
  {sale:'sales Q1',value:120},
  {sale:'sales Q2',value:150},
  {sale:'sales Q3',value:180},
  {sale:'sales Q4',value:90}
];

headElements = ['sales','value'];

}


