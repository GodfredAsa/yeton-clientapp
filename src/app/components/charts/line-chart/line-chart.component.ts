import { Component, Input, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexDataLabels,
  ApexMarkers,
  ApexTitleSubtitle,
  ApexGrid,
  ApexLegend
} from "ng-apexcharts";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @ViewChild("chart") chartId: ChartComponent;

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() stroke!: ApexStroke;
  @Input() dataLabels!: ApexDataLabels;
  @Input() markers!: ApexMarkers;
  @Input() colors!: string[];
  @Input() yaxis!: ApexYAxis;
  @Input() grid!: ApexGrid;
  @Input() legend!: ApexLegend;
  @Input() title!: ApexTitleSubtitle;

  constructor() {}
}
