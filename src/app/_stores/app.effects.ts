import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { AppActions } from '.';
import { TaskService } from '../_services/task.service';

export const getTasks$ = createEffect(
  (_actions$ = inject(Actions), _task = inject(TaskService)) => {
    return _actions$.pipe(
      ofType(AppActions.getTasks),
      exhaustMap(({ params }) =>
        _task.getTasks(params).pipe(
          map(tasks => {
            let _tasks = tasks;
            if (params && params.status) {
              _tasks = _tasks.filter(task => task.status === params.status);
            }
            return AppActions.setTasks({ tasks: _tasks });
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
