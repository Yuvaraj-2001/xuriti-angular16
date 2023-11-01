import { Component, ViewChild, OnInit , ElementRef} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { HighchartsChartModule } from 'highcharts-angular';
import { UttilityService } from '../uttility.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bar-graph',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule],
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
  @ViewChild('barGraph') public chartEl!: ElementRef;

  constructor(private hcs: UttilityService){}
  ngOnInit(): void {
   
    
  }

  ngAfterViewInit(): void {
    this.hcs.createChart(this.chartEl.nativeElement, true);
  }
}
