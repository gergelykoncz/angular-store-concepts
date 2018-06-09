import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { ExercisesSelectors, IMuscle } from '../store';
import { coldTimer } from '../../observables/hot-cold-observable';

@Component({
  selector: 'app-list-muscles',
  templateUrl: './list-muscles.component.pug',
  styleUrls: ['./list-muscles.component.scss']
})
export class ListMusclesComponent implements OnInit {
  public muscles$: Observable<IMuscle[]>;
  constructor(private _exercisesSelectors: ExercisesSelectors) {}

  ngOnInit() {
    this.muscles$ = this._exercisesSelectors.getMuscles();

    // Cold timer calls
    // coldTimer.subscribe(res => {
    //   console.log(res);
    // });
    // coldTimer.subscribe(res => {
    //   console.log(res);
    // });

    const hotTimer = coldTimer.pipe(share());

    hotTimer.subscribe(res => {
      console.log(res);
    });
    hotTimer.subscribe(res => {
      console.log(res);
    });
  }
}
