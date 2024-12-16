import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
export class BarChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  // Inputs parsed from the parent
  @Input() series: ApexAxisChartSeries = [];
  @Input() colors: string[] = [];
  @Input() dataLabels: ApexDataLabels = { enabled: true };
  @Input() legend: ApexLegend = { position: "right", offsetX: 0, offsetY: 50 };
  @Input() chartTitle: string = "Default Chart";
  @Input() categories: string[] = [];

  constructor() {
    // Initialize chart options
    this.chartOptions = {
      chart: {
        type: "bar",
        height: 350,
        stacked: false,
      },
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
        categories: [] // Updated dynamically from parent input
      },
      fill: {
        opacity: 1
      },
    };
  }

  ngOnInit(): void {
    // Update chart options dynamically based on inputs
    this.chartOptions.series = this.series;
    this.chartOptions.colors = this.colors;
    this.chartOptions.dataLabels = this.dataLabels;
    this.chartOptions.legend = this.legend;
    this.chartOptions.xaxis.categories = this.categories;
    console.log(`Chart Title: ${this.chartTitle}`);
  }
}
