import { createEntityAdapter } from "@ngrx/entity";
import { Task } from "../../_models";

export const taskAdapter = createEntityAdapter<Task>({
  selectId: (e) => e.id
});
export const taskState = taskAdapter.getInitialState();
export const taskSelectors = taskAdapter.getSelectors();
