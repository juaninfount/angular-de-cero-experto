import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html'
})
export class BarrasComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar'; //horizontalBar
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor:'#E05F76', hoverBorderColor:'red' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor:'#B25F00', hoverBorderColor:'red' },
      { data: [23, 12, 74, 71, 31, 24, 79], label: 'Series C', backgroundColor:'#A35F75', hoverBorderColor:'red' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)];

    this.barChartData.datasets[1].data = [ // todos en la serie b mostraran 59 unidades
      59,
      59, 
      59, 
      59,
      59, 
      59,
      59];

    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      59, 
      80, 
      Math.round(Math.random() * 100),
      56, 
      Math.round(Math.random() * 100),
      40];

    this.chart?.update();
  }
}