import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [120,140,180,90], label: 'undefined' },
  ];
  public lineChartLabels: Label[] =['sales Q1','sales Q2','sales Q3','sales Q4'];
  public lineChartOptions:   {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


 ngOnInit(){

 }
}
