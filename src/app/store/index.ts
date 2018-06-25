import { storeLogger } from 'ngrx-store-logger';
import { ActionReducerMap, ActionReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';


import { State } from './state';

export const reducer: ActionReducerMap<State> = {
};

function logger(_reducer: ActionReducer<State>): any {
  return storeLogger()(_reducer);
}

const metaReducers = [logger, storeFreeze];

export { State, metaReducers };
