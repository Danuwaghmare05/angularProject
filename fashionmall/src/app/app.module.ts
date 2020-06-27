import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirstComponent } from './app.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class AppModule {}
