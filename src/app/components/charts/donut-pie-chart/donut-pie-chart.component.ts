import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexPlotOptions,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  plotOptions: ApexPlotOptions;
  colors?: string[];
  legend?: ApexLegend;
};

@Component({
  selector: 'app-donut-pie-chart',
  templateUrl: './donut-pie-chart.component.html',
  styleUrls: ['./donut-pie-chart.component.css']
})
export class DonutPieChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() chartType: 'pie' | 'donut' = 'pie';
  @Input() seriesData: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];
  @Input() colors: string[] = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: 'pie',
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      plotOptions: {
        pie: {
          donut: {
            size: '30%', // Set radius to 50%
          },
        },
      },
      legend: {
        position: 'bottom', // Place legend at the bottom
        horizontalAlign: 'center',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
    // Update the chart type based on the input from the parent
    if (this.chartType === 'pie' || this.chartType === 'donut') {
      this.chartOptions.chart.type = this.chartType;
    } else {
      console.error(`Invalid chart type: ${this.chartType}. Falling back to 'pie'.`);
      this.chartOptions.chart.type = 'pie';
    }

    // Update series data and colors
    this.chartOptions.series = this.seriesData;
    this.chartOptions.colors = this.colors;
  }
}
