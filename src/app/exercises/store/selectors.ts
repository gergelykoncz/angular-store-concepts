import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { IExercisesState, IMuscle, IExercise, FEATURE_NAME } from './state';
import * as LocalActions from './actions';
import { Observable, of } from 'rxjs';
import { map, tap, filter, catchError } from 'rxjs/operators';

const selectRoot = createFeatureSelector<State>(FEATURE_NAME);
const selectFeature = createSelector(selectRoot, (state: any) => state.exercises)

const musclesSelector = createSelector(selectFeature, (state: IExercisesState) => state.muscles);
const exercisesSelector = createSelector(selectFeature, (state: IExercisesState) => state.exercises);
const errorSelector = createSelector(selectFeature, (state: IExercisesState) => state.exercises);

@Injectable()
export class ExercisesSelectors {
  constructor(private _store: Store<State>) {
    /* EMPTY */
  }

  getMuscles(): Observable<IMuscle[]> {
    return this._store.select(musclesSelector).pipe(
      tap(data => {
        console.log('data is', data)
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
      filter(data => !!data),
      catchError(e => of(null))
    );
  }

  getError(): Observable<any> {
    return this._store.select(errorSelector).pipe(filter(data => !!data))
  }

  getExercisesForMuscle(muscle: string): Observable<IExercise[]> {
    return this.getExercises().pipe(
      map(list => {
        return list.filter(e => e.targetMuscle === muscle || e.auxMuscles[muscle]);
      })
    );
  }
}
