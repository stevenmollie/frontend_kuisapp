import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./components/app.component";
import {HomeComponent} from "./components/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {TaskModule} from "./tasks/tasks.module";


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, TaskModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent, HomeComponent ]
})
export class AppModule { }
