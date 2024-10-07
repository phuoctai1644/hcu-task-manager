import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../_models';
import { AppState, selectSearchParams, selectTasks } from '../../_stores';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, NgFor, AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  tasks: Task[] = [];

  constructor(
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    combineLatest([
      this._store.select(selectTasks),
      this._store.select(selectSearchParams),
    ]).subscribe(([tasks, params]) => {
      if (params?.status) {
        // Filter by task status
        this.tasks = tasks.filter(_task => _task.status === params.status);
      } else {
        this.tasks = tasks;
      }
    });
  }
}
