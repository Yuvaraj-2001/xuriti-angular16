import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { importProvidersFrom } from '@angular/core';


export class App {
  name = 'Angular';
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppRoutingModule)],
});