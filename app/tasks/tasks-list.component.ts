/**
 * Created by Bart on 4/12/2016.
 */

import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import {Task} from "../models/Task";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'tasks-list',
    template: `
    <ul>
    <li *ngFor="let task of tasks | async"
      (click)="onSelect(task)">
      <span>{{ task.id }}</span> {{ task.name }}
    </li>
    </ul>
          `,
})


export class TaskListComponent
{
    constructor(
        private router: Router,
        // private service: TaskService
    ){}

    onSelect(task: Task) {
        this.router.navigate(['/task', task.id]);
    }

    ngOnInit() {
                // return this.service.getTasks();
    }
}