import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './navbar/navbar.component';
import {UttilityService} from './uttility.service';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule, NavbarComponent, CommonModule],
  styleUrls: ['./app.component.scss'],
  providers: [UttilityService],
    
})
export class AppComponent {
  name:any;
  title = 'service-worker';
}
