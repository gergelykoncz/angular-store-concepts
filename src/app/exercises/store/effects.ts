import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ExerciseService } from '../service';
import { IMuscle, IExercise } from './state';

import { mergeMap, switchMap } from 'rxjs/operators';

import * as LocalActions from './actions';

@Injectable()
export class ExercisesEffects {
  @Effect()
  fetchMuscles$: Observable<Action> = this.actions$.ofType(LocalActions.FETCH_MUSCLES).pipe(
    mergeMap(() => {
      console.log(`Effect: Fetch muscles initiated`);
      return this.exerciseService.fetchMuscles().pipe(
        switchMap((result: IMuscle[]) => {
          return of(new LocalActions.MusclesFetched(result));
        })
      );
    })
  );

  @Effect()
  fetchExercises$: Observable<Action> = this.actions$.ofType(LocalActions.FETCH_EXERCISES).pipe(
    mergeMap(() => {
      console.log(`Effect: Fetch exercises initiated`);
      return this.exerciseService.fetchExercises().pipe(
        switchMap((result: IExercise[]) => {
          return of(new LocalActions.ExercisesFetched(result));
        })
      );
    })
  );

  constructor(private actions$: Actions, private exerciseService: ExerciseService) {}
}
