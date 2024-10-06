import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskRequest } from '../../_models';

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
    const newTask: TaskRequest = {
      name: this.taskName,
      // Can add more request here in the future...
    }
    this.taskName = '';
    this.addTask.next(newTask);
  }
}
