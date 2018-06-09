import { Observable } from 'rxjs';

// A basic observable example
// An Observable is just a function that takes an Observer and returns a function.
// An Observer is just a duck-typed object, with next, complete and error functions.
// Safe Observers -> the system wraps the Observers passed-in to Observables to enforce the following guidelines:
// 1. Not all methods need to be implemented
// 2. next after complete or error is not allowed
// 3. Nothing should be called after unsubscribed
// 4. complete and error calls should unsubscribe
// 5. If any method (next, error or complete) throws an exception the unsubscription should be called, as to not leak resources

export const myObservable = observer => {
  const request = new XMLHttpRequest();
  request.addEventListener('load', data => observer.next(data) && observer.complete());
  request.addEventListener('error', err => observer.error(err));

  request.open('GET', 'https://api.github.com', true);
  request.send();

  return () => {
    request.abort();
  };
};

// Operators are just functions, a naive map implementation:
export const myMap = (source, project) =>
  new Observable(observer => {
    const mapObserver = {
      next: res => observer.next(project(res)),
      error: err => observer.error(err),
      complete: () => observer.complete()
    };
    return source.subscribe(mapObserver);
  });

// A naive take implementation:
export const myTake = (source, count) =>
  new Observable(observer => {
    let callCount = 0;
    const mapObserver = {
      next: res => {
        callCount++;
        observer.next(res);
        if (callCount === count) {
          this.complete();
        }
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    };
    return source.subscribe(mapObserver);
  });
