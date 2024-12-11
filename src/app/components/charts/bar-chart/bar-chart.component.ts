import { Component, Input, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  colors?: string[];
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  // Accept inputs from the parent component
  @Input() series: ApexAxisChartSeries = [
    {
      name: "Default Series",
      data: [10, 20, 30, 40, 50]
    }
  ];
  @Input() colors: string[] = ["#008FFB", "#00E396", "#FEB019", "#FF4560"];
  @Input() dataLabels: ApexDataLabels = {
    enabled: true
  };
  @Input() legend: ApexLegend = {
    position: "right",
    offsetX: 0,
    offsetY: 50
  };
  @Input() chartName: string = "Default Chart";

  constructor() {
    this.chartOptions = {
      series: [], // Initialized empty, updated in ngOnInit
      chart: {
        type: "bar",
        height: 350,
        stacked: false,
      },
      dataLabels: {},
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      xaxis: {
        categories: [
          "2011 Q1",
          "2011 Q2",
          "2011 Q3",
          "2011 Q4",
          "2012 Q1",
          "2012 Q2",
          "2012 Q3",
          "2012 Q4"
        ]
      },
      fill: {
        opacity: 1
      },
      legend: {}, // Updated dynamically
      colors: [], // Updated dynamically
    };
  }

  ngOnInit(): void {
    // Update options based on inputs
    this.chartOptions.series = this.series;
    this.chartOptions.colors = this.colors;
    this.chartOptions.dataLabels = this.dataLabels;
    this.chartOptions.legend = this.legend;
    console.log(`Chart Name: ${this.chartName}`);
  }
}
