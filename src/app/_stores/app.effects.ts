import { inject } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { AppActions } from '.';
import { TaskService } from '../_services/task.service';
import { Update } from '@ngrx/entity';
import { Task } from '../_models';

export const getTasks$ = createEffect(
  (_actions$ = inject(Actions), _task = inject(TaskService)) => {
    return _actions$.pipe(
      ofType(AppActions.getTasks),
      exhaustMap(() =>
        _task.getTasks().pipe(
          map(tasks => AppActions.setTasks({ tasks })),
          catchError(error => {
            console.error(error);
            return of(error);
          })
        )
      )
    );
  },
  { functional: true }
);

export const addTask$ = createEffect(
  (_actions$ = inject(Actions), _task = inject(TaskService)) => {
    return _actions$.pipe(
      ofType(AppActions.addTask),
      exhaustMap(({ request }) =>
        _task.addTask(request).pipe(
          map(task => {
            return AppActions.setTask({ task });
          }),
          catchError(error => {
            console.error(error);
            return of(error);
          })
        )
      )
    );
  },
  { functional: true }
);

export const updateTask$ = createEffect(
  (_actions$ = inject(Actions), _task = inject(TaskService)) => {
    return _actions$.pipe(
      ofType(AppActions.updateTask),
      exhaustMap(({ id, payload }) =>
        _task.updateTask(id, payload).pipe(
          map(task => {
            const updatedTask: Update<Task> = {
              id: task.id,
              changes: { ...task }
            } 
            return AppActions.updateTaskValue({ task: updatedTask });
          }),
          catchError(error => {
            console.error(error);
            return of(error);
          })
        )
      )
    );
  },
  { functional: true }
);

export const deleteTask$ = createEffect(
  (_actions$ = inject(Actions), _task = inject(TaskService)) => {
    return _actions$.pipe(
      ofType(AppActions.deleteTask),
      exhaustMap(({ id }) =>
        _task.deleteTask(id).pipe(
          map(() => {
            return AppActions.deleteTaskSuccess({ id });
          }),
          catchError(error => {
            console.error(error);
            return of(error);
          })
        )
      )
    );
  },
  { functional: true }
);
