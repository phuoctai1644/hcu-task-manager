import { Component } from '@angular/core';
import { TaskComponent } from './_components/task/task.component';
import { TaskListComponent } from './_components/task-list/task-list.component';
import { TaskFilterComponent } from './_components/task-filter/task-filter.component';
import { TaskFormComponent } from './_components/task-form/task-form.component';
import { FilterObject, TaskRequest, TaskSearchParams } from './_models';
import { TaskService } from './_services/task.service';
import { Store } from '@ngrx/store';
import { AppActions, AppState } from './_stores';

const COMPONENTS = [
  TaskComponent,
  TaskListComponent,
  TaskFilterComponent,
  TaskFormComponent,
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private _task: TaskService,
    private _store: Store<AppState>,
  ) {
    this._store.dispatch(AppActions.getTasks({}));
  }

  onFilterChanged(filter: FilterObject) {
    const searchParam: TaskSearchParams = {
      status: filter['status']?.selecteds?.[0]?.value
    }
    this._store.dispatch(AppActions.getTasks({ params: searchParam }));
  }

  onTaskAdded(request: TaskRequest) {
    this._store.dispatch(AppActions.addTask({ request }));
  }
}
