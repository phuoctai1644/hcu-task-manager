import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { TaskStatus } from '../../_models/task.model';
import { FilterObject, SelectOption } from '../../_models';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss'
})
export class TaskFilterComponent {
  @Output() filterChange = new EventEmitter<FilterObject>();

  filter: FilterObject = {
    status: {
      label: 'Task Statuses',
      items: [
        { label: 'All' },
        { label: 'Completed', value: TaskStatus.COMPLETED },
        { label: 'Incomplete', value: TaskStatus.INCOMPLETE },
      ],
      selecteds: [],
    },
  }

  constructor() { }

  onStatusChanged(status: SelectOption<TaskStatus>) {
    this.filter['status'].selecteds = [status];
    this.filterChange.next(this.filter);
  }

  isActiveStatus(status?: TaskStatus) {
    const selecteds = this.filter['status'].selecteds;
    if (!status && !selecteds?.length) {
      return true;
    }

    return selecteds?.find(el => el.value === status);
  }
}
