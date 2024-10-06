import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../_models';
import { AppState, selectTasks } from '../../_stores';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, NgFor, AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.tasks$ = this._store.select(selectTasks);
  }
}
