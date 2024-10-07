import { EntityState } from "@ngrx/entity";
import { Task, TaskSearchParams } from "../_models";

export interface AppState {
  tasks: EntityState<Task>;
  searchParams: TaskSearchParams;
}
