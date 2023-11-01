import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TimerComponent } from './timer/timer.component';
// import { BarGraphComponent } from './bar-graph/bar-graph.component';
// import { PieChartComponent } from './pie-chart/pie-chart.component';

const routers: Routes = [
  { path: 'timer', loadComponent: ()=> import('./timer/timer.component').then(mod => mod.TimerComponent)  },
  { path: 'report', loadComponent: ()=> import('./bar-graph/bar-graph.component').then(mod => mod.BarGraphComponent) },
  { path: 'teams',loadComponent: ()=> import('./pie-chart/pie-chart.component').then(mod => mod.PieChartComponent)},
  { path: 'client',loadComponent: ()=> import('./bar-graph/bar-graph.component').then(mod => mod.BarGraphComponent)},
  { path: 'project', loadComponent: ()=> import('./pie-chart/pie-chart.component').then(mod => mod.PieChartComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
