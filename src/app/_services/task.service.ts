import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs';
import { Task, TaskRequest, TaskSearchParams, TaskStatus } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, name: 'The first task', status: TaskStatus.INCOMPLETE },
    { id: 2, name: 'The second task', status: TaskStatus.COMPLETED },
  ];

  // constructor(private http: HttpClient) { }

  getTasks(request?: TaskSearchParams) {
    return of(this.tasks).pipe(
      map(tasks => {
        if (request && request.status) {
          return tasks.filter(task => task.status === request.status);
        }
        return tasks;
      })
    );
  }

  addTask(task: Task) {
    this.tasks.push(task);
    return of(task);
  }
}
