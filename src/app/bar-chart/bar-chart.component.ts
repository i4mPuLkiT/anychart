import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from "@angular/core";
import "anychart";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {
  @ViewChild('chartContainer') chartContainer;
  @Input() inputData: [];
  
  chart: anychart.charts.Cartesian = null;

  constructor() {}

  ngOnInit() {
    // create a chart
    this.chart = anychart.column();

    // create a column series and set the data
    var series = this.chart.column(this.inputData);

    // set the container id
    this.chart.container("chartContainer");

    // initiate drawing the chart
    this.chart.draw();
  }
}
