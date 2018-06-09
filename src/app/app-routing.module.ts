import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMusclesComponent } from './exercises';

const routes: Routes = [
  {
    component: ListMusclesComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
