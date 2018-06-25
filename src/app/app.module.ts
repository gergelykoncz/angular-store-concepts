import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducer } from './store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FirebaseModule } from './firebase';

import { ExercisesModule } from './exercises';

const routes = [{
  path: '',
  loadChildren: '/app/exercises'
}]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FirebaseModule.forRoot(),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule,
    StoreModule.forRoot(reducer, {
      metaReducers
    }),

    EffectsModule.forRoot([]),
    ExercisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
