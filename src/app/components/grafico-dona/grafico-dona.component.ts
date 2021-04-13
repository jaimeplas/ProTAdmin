import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';


  //@Input() doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  //@Input() doughnutChartData: MultiDataSet = [
  //  [350, 450, 100],
  //  [50, 150, 120],
  //  [250, 130, 70],
  //];
  //@Input() doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
