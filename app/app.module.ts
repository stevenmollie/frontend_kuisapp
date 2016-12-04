import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./components/app.component";
import {HomeComponent} from "./components/home.component";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent, HomeComponent ]
})
export class AppModule { }
