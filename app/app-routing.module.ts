/**
 * Created by Bart on 4/12/2016.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from "./components/home.component";


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}