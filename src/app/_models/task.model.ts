export interface Task {
  name: string;
  id: number;
  dueDate?: string;
  status: TaskStatus | string;
  createdAt?: string;
  modifiedAt?: string;
  // ...
}

export interface TaskRequest {
  name: string;
  // ...
}

export interface TaskSearchParams {
  status: TaskStatus,
  // ...
}

export enum TaskStatus {
  COMPLETED = 'COMPLETED',
  INCOMPLETE = 'INCOMPLETE',
}
