import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.models';
import { taskSelectors } from './entities/task.entity';

export const featureKey = 'app';

const selectFeature = createFeatureSelector<AppState>(featureKey);

export const selectTasks = createSelector(selectFeature, (state) => taskSelectors.selectAll(state.tasks));
