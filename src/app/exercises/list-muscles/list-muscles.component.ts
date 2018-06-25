import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ExercisesSelectors, IMuscle } from '../store';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-list-muscles',
  templateUrl: './list-muscles.component.pug',
  styleUrls: ['./list-muscles.component.scss']
})
export class ListMusclesComponent implements OnInit {
  public muscles$: Observable<IMuscle[]>;
  public error$: Observable<any>;
  public counter = 0;
  public subject$ = new Subject<number>();
  constructor(private _exercisesSelectors: ExercisesSelectors) { }

  ngOnInit() {
    this.muscles$ = this._exercisesSelectors.getMuscles();
    this.error$ = this._exercisesSelectors.getError();

    this.subject$.pipe(filter(x => x > 5))
  }

  buttonClick() {
    this.subject$.next(this.counter++);
  }
}
