import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CardComponentComponent, BarChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
