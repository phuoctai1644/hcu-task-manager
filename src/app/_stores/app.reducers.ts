import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.models';
import * as AppActions from './app.actions';
import { taskAdapter, taskState } from './entities/task.entity';

const initialState: AppState = {
  tasks: taskState,
  searchParams: {}
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.setTasks, (state, { tasks }) => ({
    ...state,
    tasks: taskAdapter.addMany(tasks, state.tasks),
  })),
  on(AppActions.setTask, (state, { task }) => ({
    ...state,
    tasks: taskAdapter.addOne(task, state.tasks),
  })),
  on(AppActions.updateTaskValue, (state, { task }) => ({
    ...state,
    tasks: taskAdapter.updateOne(task, state.tasks),
  })),
  on(AppActions.deleteTaskSuccess, (state, { id }) => ({
    ...state,
    tasks: taskAdapter.removeOne(id, state.tasks),
  })),
  on(AppActions.setSearchParams, (state, { params }) => ({
    ...state,
    searchParams: params
  })),
);
