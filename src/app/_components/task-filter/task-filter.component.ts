import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { TaskStatus } from '../../_models/task';
import { FilterItem, SelectOption } from '../../_models';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss'
})
export class TaskFilterComponent {
  statusFilter: FilterItem<SelectOption<TaskStatus>> = {
    label: 'Task Statuses',
    items: [
      { label: 'All' },
      { label: 'Completed', value: TaskStatus.COMPLETED },
      { label: 'Incomplete', value: TaskStatus.INCOMPLETE },
    ],
    selecteds: [],
  };

  constructor() { }

  onStatusChanged(status: SelectOption<TaskStatus>) {
    this.statusFilter.selecteds = [status];
  }

  isActiveStatus(status?: TaskStatus) {
    const selecteds = this.statusFilter.selecteds;
    if (!status && !selecteds.length) {
      return true;
    }

    return this.statusFilter.selecteds.find(el => el.value === status);
  }
}
