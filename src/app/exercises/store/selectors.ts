import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { IExercisesState, initialExercisesState, IMuscle, IExercise } from './state';
import * as LocalActions from './actions';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

const selectFeature = createFeatureSelector<IExercisesState>('exercises');

const musclesSelector = createSelector(selectFeature, (state: IExercisesState) => state.muscles);
const exercisesSelector = createSelector(selectFeature, (state: IExercisesState) => state.exercises);

@Injectable()
export class ExercisesSelectors {
  constructor(private _store: Store<State>) {
    /* EMPTY */
  }

  getMuscles(): Observable<IMuscle[]> {
    return this._store.select(musclesSelector).pipe(
      tap(data => {
        if (!data) {
          this._store.dispatch(new LocalActions.FetchMuscles());
        }
      }),
      filter(data => !!data)
    );
  }

  getExercises(): Observable<IExercise[]> {
    return this._store.select(exercisesSelector).pipe(
      tap(data => {
        if (!data) {
          this._store.dispatch(new LocalActions.FetchExercises());
        }
      }),
      filter(data => !!data)
    );
  }

  getExercisesForMuscle(muscle: string): Observable<IExercise[]> {
    return this.getExercises().pipe(
      map(list => {
        return list.filter(e => e.targetMuscle === muscle || e.auxMuscles[muscle]);
      })
    );
  }
}
