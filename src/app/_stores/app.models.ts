import { EntityState } from "@ngrx/entity";
import { Task } from "../_models";

export interface AppState {
  tasks: EntityState<Task>;
}
