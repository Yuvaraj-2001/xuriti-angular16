import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import {BarGraphComponent} from '../bar-graph/bar-graph.component';
import {PieChartComponent} from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  imports: [TableModule, TabViewModule, BarGraphComponent, PieChartComponent]
})
export class TimerComponent {

}
