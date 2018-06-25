import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ExercisesEffects, ExercisesSelectors, Reducers, FEATURE_NAME } from './store';
import { ListMusclesComponent } from './list-muscles/list-muscles.component';
import { EffectsModule } from '@ngrx/effects';
import { ExerciseService } from './service';

export const routes = [{
  path: '',
  component: ListMusclesComponent
}]

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([ExercisesEffects]), RouterModule.forChild(routes), StoreModule.forFeature(FEATURE_NAME, Reducers)],
  declarations: [ListMusclesComponent],
  providers: [ExercisesEffects, ExercisesSelectors, ExerciseService],
  exports: [ListMusclesComponent]
})
export class ExercisesModule { }

export * from './store';
