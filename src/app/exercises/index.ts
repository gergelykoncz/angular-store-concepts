import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesEffects, ExercisesSelectors } from './store';
import { ListMusclesComponent } from './list-muscles/list-muscles.component';
import { EffectsModule } from '@ngrx/effects';
import { ExerciseService } from './service';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([ExercisesEffects])],
  declarations: [ListMusclesComponent],
  providers: [ExercisesEffects, ExercisesSelectors, ExerciseService],
  exports: [ListMusclesComponent]
})
export class ExercisesModule {}

export * from './store';
export { ListMusclesComponent };
