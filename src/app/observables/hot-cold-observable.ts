import { Observable, Observer } from 'rxjs';

// A cold observable creates its own producer
// Producer can be anything (a stream source in other words)
// Cold observables are unicast, meaning that each subscription will have a separate instance of the producer
// This can result in e.g. multiple HTTP calls

const coldTimer = new Observable<number>((observer: Observer<number>) => {
  let callCount = 0;
  console.log('new subscription to coldTimer');
  const timeout = setInterval(() => {
    console.log(`coldTimer interval id ${timeout} was called.`);
    callCount++;
    observer.next(callCount);
  }, 1000);

  return () => clearInterval(timeout);
});

// Cold timer calls
// coldTimer.subscribe(res => {
//   console.log(res);
// });
// coldTimer.subscribe(res => {
//   console.log(res);
// });

// The following code results in two "new subscription to coldTimer" messages, and two intervals running

export { coldTimer };
