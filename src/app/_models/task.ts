export interface Task {
  name: string;
  id: number;
  dueDate?: string;
  status: TaskStatus | string;
  // ...
}

export enum TaskStatus {
  COMPLETED = 'COMPLETED',
  INCOMPLETE = 'INCOMPLETE',
}
