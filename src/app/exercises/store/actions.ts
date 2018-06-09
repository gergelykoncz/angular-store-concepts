import { Action } from '@ngrx/store';
import { IMuscle, IExercise } from './state';

export const FETCH_MUSCLES = '[Exercises] Fetch muscles';
export const MUSCLES_FETCHED = '[Exercises] Muscles fetched';
export const FETCH_EXERCISES = '[Exercises] Fetch exercises';
export const EXERCISES_FETCHED = '[Exercises] Exercises fetched';

export class FetchMuscles implements Action {
  readonly type = FETCH_MUSCLES;
  constructor() {}
}

export class MusclesFetched implements Action {
  readonly type = MUSCLES_FETCHED;
  constructor(public muscles: IMuscle[]) {}
}

export class FetchExercises implements Action {
  readonly type = FETCH_EXERCISES;
  constructor() {}
}

export class ExercisesFetched implements Action {
  readonly type = EXERCISES_FETCHED;
  constructor(public exercises: IExercise[]) {}
}

export type AllActions<T> = FetchMuscles | MusclesFetched | FetchExercises | ExercisesFetched;
