import { Component } from '@angular/core';
import { TaskComponent } from './_components/task/task.component';
import { TaskListComponent } from './_components/task-list/task-list.component';
import { TaskFilterComponent } from './_components/task-filter/task-filter.component';
import { TaskFormComponent } from './_components/task-form/task-form.component';
import { FilterObject, Task, TaskRequest, TaskSearchParams, TaskStatus } from './_models';
import { TaskService } from './_services/task.service';

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
  constructor(private _task: TaskService) { }

  onFilterChanged(filter: FilterObject) {
    const searchParam: TaskSearchParams = {
      status: filter['status']?.selecteds?.[0]?.value
    }
    this._task.getTasks(searchParam).subscribe();
  }

  onTaskAdded(request: TaskRequest) {
    const newTask: Task = {
      ...request,
      id: Date.now(),
      status: TaskStatus.INCOMPLETE,
    }
    this._task.addTask(newTask).subscribe();
  }
}
