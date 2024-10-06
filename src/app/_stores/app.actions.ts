import { createAction, props } from "@ngrx/store";
import { Task, TaskRequest, TaskSearchParams } from "../_models";

export const getTasks = createAction('[Task/API] getTasks', props<{ params?: TaskSearchParams }>());
export const setTasks = createAction('[Task/Store] setTasks', props<{ tasks: Task[] }>());
export const addTask = createAction('[Task/API] addTask', props<{ request: TaskRequest }>());
export const setTask = createAction('[Task/Store] setTask', props<{ task: Task }>());
export const updateTask = createAction('[Task/API] updateTask', props<{ id: number, payload: any }>());
export const deleteTask = createAction('[Task/API] deleteTask', props<{ id: number }>());
