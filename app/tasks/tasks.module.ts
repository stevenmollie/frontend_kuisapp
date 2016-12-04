/**
 * Created by Bart on 4/12/2016.
 */

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TaskListComponent }    from './tasks-list.component';
import { TaskDetailComponent }  from './task-detail.component';
import {TaskRoutingModule} from "./tasks-routing.module";

// import { TaskService } from './task.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TaskRoutingModule
    ],
    declarations: [
        TaskListComponent,
        TaskDetailComponent
    ],
    providers: [
        // TaskService
    ]
})
export class TaskModule {}