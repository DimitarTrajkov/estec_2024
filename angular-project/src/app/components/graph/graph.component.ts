import { Component, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GraphDataType } from "../../models/GraphDataType";

declare let CanvasJS: any;
declare type DataType = {
  label: Date,
  y: Number
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements AfterViewInit, OnChanges {
  @Input() Day: string = '';
  @Input() Fitness: string = '';
  @Input() data: GraphDataType[] = [];
  @Input() id: string = '';
  @Input() width: string = '';

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) {
      this.renderChart();
    }
  }

  renderChart(): void {

    const chartContainerId = `chartContainer_${this.id}`;
    this.elRef.nativeElement.querySelector('.chartContainer').setAttribute('id', chartContainerId);
    const chartContainer = document.getElementById(chartContainerId) as HTMLElement;
    if (chartContainer)
      chartContainer.style.width = this.width;

    let chart = new CanvasJS.Chart(chartContainerId, {
      animationEnabled: true,
      theme: "light2",
      backgroundColor: "#e6c7b1",
      title: {
        text: `${this.Fitness} ${this.Day}`
      },
      data: [{
        type: "column",
        color: "purple",
        dataPoints: this.data
      }]
    });

    chart.render();
  }
}
