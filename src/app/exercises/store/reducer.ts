import { ActionReducer } from '@ngrx/store';

import { initialExercisesState, IExercisesState } from './state';
import * as Actions from './actions';

import * as _ from 'lodash';

const reducer: ActionReducer<IExercisesState> = (state = initialExercisesState, action: Actions.AllActions<any>) => {
  const result = _.cloneDeep(state);

  switch (action.type) {
    case Actions.MUSCLES_FETCHED:
      result.muscles = action.muscles;
      return result;

    case Actions.EXERCISES_FETCHED:
      result.exercises = action.exercises;
      return result;

    default:
      return state;
  }
};

export { reducer as Reducer };
