import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task, TaskStatus } from '../../_models';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppActions, AppState } from '../../_stores';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnChanges {
  @Input() task!: Task;
  selectedTask!: Partial<Task>;
  taskStatus = TaskStatus;
  isEnterPressed = false;

  constructor(private _store: Store<AppState>) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.task) {
      this.taskValueChanged();
    }
  }

  taskValueChanged() {
    this.selectedTask = {
      name: this.task.name,
      dueDate: this.task.dueDate,
      status: this.task.status,
    }
  }

  onToggleStatus() {
    if (this.selectedTask.status === TaskStatus.COMPLETED) {
      this.selectedTask.status = TaskStatus.INCOMPLETE;
    } else {
      this.selectedTask.status = TaskStatus.COMPLETED;
    }
    this.patchValue('status', this.selectedTask.status);
  }

  patchValue(type: string, value: any) {
    const payload = { [type]: value };
    this._store.dispatch(AppActions.updateTask({ id: this.task.id, payload }));
  }

  onDeleteTask() {
    this._store.dispatch(AppActions.deleteTask({ id: this.task.id }));
  }

  onFocusoutName(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    if (!this.isEnterPressed) {
      this.onEnterName();
    }
    this.isEnterPressed = false;
  }

  onEnterName(event?: Event) {
    event?.stopPropagation();
    event?.preventDefault();
    this.isEnterPressed = true;

    if (this.selectedTask.name === this.task.name) {
      return;
    }

    if (!this.selectedTask.name) {
      this.selectedTask.name = this.task.name;
      return;
    }

    this.patchValue('name', this.selectedTask.name);
  }
}
