import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroA6Component } from './intro-a6/intro-a6.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroA6Component,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '', component : IntroA6Component }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
