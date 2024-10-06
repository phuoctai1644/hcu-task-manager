import { Component } from '@angular/core';
import { TaskComponent } from './_components/task/task.component';
import { TaskListComponent } from './_components/task-list/task-list.component';
import { TaskFilterComponent } from './_components/task-filter/task-filter.component';
import { TaskFormComponent } from './_components/task-form/task-form.component';

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
  
}
