/**
 * Created by Bart on 4/12/2016.
 */

import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Task} from "../models/Task";

@Component({
    selector: 'task-detail',
    template: `
    <p>detail van taak </p>
          `
})
export class TaskDetailComponent
{
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        // private service: TaskService
    ) {}

    task: Task;

    ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
        //     .switchMap((params: Params) => this.service.getTask(+params['id']))
        //     .subscribe((task: Task) => this.task = task);
    }
}