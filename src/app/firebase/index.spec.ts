import { FirebaseModule } from '.';

describe('FirebaseModule', () => {
  let firebaseModule: FirebaseModule;

  beforeEach(() => {
    firebaseModule = new FirebaseModule();
  });

  it('should create an instance', () => {
    expect(firebaseModule).toBeTruthy();
  });
});
