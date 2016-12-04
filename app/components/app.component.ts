/**
 * Created by Bart on 4/12/2016.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    
    <h1>The Cleansing</h1>
    <a routerLink="/home" routerLinkActive="active">Home</a>
    <router-outlet></router-outlet>
          `
})
export class AppComponent
{
}