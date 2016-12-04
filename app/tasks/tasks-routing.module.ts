/**
 * Created by Bart on 4/12/2016.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent }    from './tasks-list.component';
import { TaskDetailComponent }  from './task-detail.component';

const taskroutes: Routes = [
    { path: 'tasks',  component: TaskListComponent },
    { path: 'task/:id', component: TaskDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(taskroutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TaskRoutingModule { }