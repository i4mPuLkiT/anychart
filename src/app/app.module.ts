import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CardComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
