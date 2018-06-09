import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseService {
  constructor(private angularFireStore: AngularFirestore) {}

  fetchCollection(name: string): Observable<any> {
    return this.angularFireStore.collection(name).valueChanges();
  }

  filterCollection(name: string, muscle: string): Observable<any> {
    const primaryExercises = this.angularFireStore
      .collection('exercises', (ref: any) => ref.where('targetMuscle', '==', muscle))
      .valueChanges();
    const auxEcxercises = this.angularFireStore
      .collection('exercises', (ref: any) => ref.where(`auxMuscles.${muscle}`, '==', true))
      .valueChanges();

    return combineLatest(primaryExercises, auxEcxercises).pipe(map((res: any[]) => [...res[0], ...res[1]]));
  }
}
