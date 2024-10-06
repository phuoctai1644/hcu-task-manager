import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NgFor } from '@angular/common';
import { Task } from '../../_models';
import { TaskService } from '../../_services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private _task: TaskService) { }

  ngOnInit(): void {
    this._task.getTasks().subscribe({
      next: response => {
        this.tasks = response;
      },
      error: (error: string) => {
        console.error(error);
      }
    })
  }
}
