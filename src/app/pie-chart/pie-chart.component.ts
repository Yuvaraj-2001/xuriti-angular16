import { AfterViewInit, ElementRef, Component, OnInit,  ViewChild } from '@angular/core';
import { UttilityService } from '../uttility.service';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [
    CommonModule, 
    // BrowserModule, 
    DropdownModule, FormsModule,
    //  BrowserAnimationsModule
    ],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, AfterViewInit{
  cities:any;
  selectedCity:any;
  @ViewChild('piechart') public chartEl!: ElementRef;

  constructor(private hcs: UttilityService){

  }
  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }
  
  ngAfterViewInit(): void {
    this.hcs.createChart(this.chartEl.nativeElement);
  }
}
