import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskRequest, TaskStatus } from '../../_models';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<TaskRequest>();
  taskName = '';

  onKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit() {
    if (!this.taskName) {
      return;
    }

    const taskRequest: TaskRequest = {
      name: this.taskName,
      status: TaskStatus.INCOMPLETE,
      // Can add more request here in the future...
    }
    this.taskName = '';
    this.addTask.next(taskRequest);
  }
}
