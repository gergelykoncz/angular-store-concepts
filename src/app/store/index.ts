import { storeLogger } from 'ngrx-store-logger';
import { ActionReducerMap, ActionReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { Reducer as ExercisesReducer } from '../exercises';

import { State } from './state';

export const reducer: ActionReducerMap<State> = {
  exercises: ExercisesReducer
};

function logger(_reducer: ActionReducer<State>): any {
  return storeLogger()(_reducer);
}

const metaReducers = [logger, storeFreeze];

export { State, metaReducers };
