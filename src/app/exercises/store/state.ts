export interface IExercisesState {
  muscles: IMuscle[];
  exercises: IExercise[];
}

export interface IMuscle {
  name: string;
}

export interface IExercise {
  auxMuscles: { string: boolean };
  isBasic: boolean;
  isCompound: boolean;
  name: string;
  targetMuscle: string;
  tools: string;
}

export const initialExercisesState: IExercisesState = {
  muscles: null,
  exercises: null
};
