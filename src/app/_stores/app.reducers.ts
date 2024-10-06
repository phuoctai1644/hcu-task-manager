import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.models';
import * as AppActions from './app.actions';
import { taskAdapter, taskState } from './entities/task.entity';

const initialState: AppState = {
  tasks: taskState,
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.setTasks, (state, { tasks }) => ({
    ...state,
    tasks: taskAdapter.setAll(tasks, state.tasks),
  })),
  on(AppActions.setTask, (state, { task }) => ({
    ...state,
    tasks: taskAdapter.addOne(task, state.tasks),
  })),
);
