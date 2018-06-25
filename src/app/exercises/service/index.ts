import { Injectable } from '@angular/core';
import { FirebaseService } from '../../firebase';
import { delay } from 'rxjs/operators';

@Injectable()
export class ExerciseService {
  constructor(private firebaseSevice: FirebaseService) { }

  fetchMuscles() {
    return this.firebaseSevice.fetchCollection('muscles')
  }

  fetchExercises() {
    return this.firebaseSevice.fetchCollection('exercises');
  }
}
