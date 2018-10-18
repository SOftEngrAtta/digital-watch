import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// generic service 
import { DisplayTime } from './shared/displaytime';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTime
  ],
  imports: [
    BrowserModule
  ],
  providers: [DisplayTime],
  bootstrap: [AppComponent]
})
export class AppModule { }
