import { NgModule, ModuleWithProviders } from '@angular/core';
import { FirebaseService } from './service';

@NgModule({})
export class FirebaseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FirebaseModule,
      providers: [FirebaseService]
    };
  }
}

export { FirebaseService };
