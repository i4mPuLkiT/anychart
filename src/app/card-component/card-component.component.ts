import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponentComponent implements OnInit {
  @Input() dataSet;

  constructor() {}

  ngOnInit() {
    anychart.onDocumentReady(function () {
      // Creates Bar chart.
      var data = [
        { x: 'John1', value: 10000 },
        { x: 'Jake2', value: 12000 },
        { x: 'Peter3', value: 13000 },
        { x: 'James4', value: 10000 },
        { x: 'Mary5', value: 9000 },
        { x: 'Jake7', value: 12000 },
        { x: 'Peter8', value: 13000 },
        { x: 'James9', value: 10000 },
        { x: 'Mary10', value: 9000 },
        { x: 'John11', value: 10000 },
        { x: 'Jake12', value: 12000 },
        { x: 'Peter13', value: 13000 },
        { x: 'James14', value: 10000 },
        { x: 'Mary15', value: 9000 },
        { x: 'John16', value: 10000 },
        { x: 'Jake17', value: 12000 },
        { x: 'Peter18', value: 13000 },
        { x: 'James19', value: 10000 },
        { x: 'Mary20', value: 9000 },
        { x: 'John21', value: 10000 },
        { x: 'Jake22', value: 12000 },
        { x: 'Peter23', value: 13000 },
        { x: 'James24', value: 10000 },
        { x: 'Mary25', value: 9000 },
        { x: 'John26', value: 10000 },
        { x: 'Jake27', value: 12000 },
        { x: 'Peter28', value: 13000 },
        { x: 'James29', value: 10000 },
        { x: 'Mary30', value: 9000 },
        { x: 'John31', value: 10000 },
        { x: 'Jake32', value: 12000 },
        { x: 'Peter33', value: 13000 },
        { x: 'James34', value: 10000 },
        { x: 'Mary35', value: 9000 },
        { x: 'John36', value: 10000 },
        { x: 'Jake37', value: 12000 },
        { x: 'Peter38', value: 13000 },
        { x: 'James39', value: 10000 },
        { x: 'Mary40', value: 9000 },
        { x: 'John41', value: 10000 },
        { x: 'Jake42', value: 12000 },
        { x: 'Peter43', value: 13000 },
        { x: 'James44', value: 10000 },
        { x: 'Mary45', value: 9000 },
        { x: 'John46', value: 10000 },
        { x: 'Jake47', value: 12000 },
        { x: 'Peter48', value: 13000 },
        { x: 'James49', value: 10000 },
        { x: 'Mary50', value: 9000 },
        { x: 'John51', value: 10000 },
        { x: 'Jake52', value: 12000 },
        { x: 'Peter53', value: 13000 },
        { x: 'James54', value: 10000 },
        { x: 'Mary55', value: 9000 },
        { x: 'John56', value: 10000 },
        { x: 'Jake57', value: 12000 },
        { x: 'Peter58', value: 13000 },
        { x: 'James59', value: 10000 },
        { x: 'Mary60', value: 9000 },
        { x: 'John61', value: 10000 },
        { x: 'Jake62', value: 12000 },
        { x: 'Peter63', value: 13000 },
        { x: 'James64', value: 10000 },
        { x: 'Mary65', value: 9000 },
        { x: 'John66', value: 10000 },
      ];
      var chart = anychart.bar(data);
      var credits = chart.credits();
      credits.enabled(false);
      chart.padding([10, 40, 5, 20]);
      chart.animation(true).padding([30, 40, 5, 20]);
      chart.barGroupsPadding(0);
      var xLabels = chart.xAxis().labels();
      xLabels.fontSize(10);
      xLabels.fontWeight(500);
      xLabels.width(185);
      xLabels.hAlign('right');
      xLabels.wordWrap('break-word');
      xLabels.wordBreak('normal');
      var series = chart.bar(data);
      var labels = series.labels();
      labels.enabled(true);
      labels.fontSize(11);
      labels.fontWeight(500);
      labels.fontColor('white');
      labels.position('center');
      chart.pointWidth(25);
      var noDataLabel = chart.noData().label();
      noDataLabel.enabled(true);
      noDataLabel.text('no data');
      var categoryWidth = 40;
      const offset = 50;
      var chartHeight = categoryWidth * data.length + offset;
      chart.xAxis().overlapMode('allow-overlap');
      chart.title('Create a Bar chart');
      chart.container('container');
      chart.draw();
    });
  }
}
