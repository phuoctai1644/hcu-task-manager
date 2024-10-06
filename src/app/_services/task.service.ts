import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Task, TaskRequest, TaskSearchParams } from '../_models';
import { environment } from '../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  getTasks(request?: TaskSearchParams) {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
  }

  addTask(task: TaskRequest) {
    return this.http.post<Task>(`${environment.apiUrl}/tasks`, task);
  }

  updateTask(id: number, request: any) {
    return this.http.patch<Task>(`${environment.apiUrl}/tasks/${id}`, request);
  }
}
