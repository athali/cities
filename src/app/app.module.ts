import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadTownsService } from './load-towns.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WilayaComponent } from './wilaya/wilaya.component';

@NgModule({
  declarations: [
    AppComponent,
    WilayaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoadTownsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
