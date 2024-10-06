import { Component, ViewEncapsulation } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Task, TaskStatus } from '../../_models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, name: 'The first task', status: TaskStatus.INCOMPLETE },
    { id: 2, name: 'The second task', status: TaskStatus.COMPLETED },
  ];
}
