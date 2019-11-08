import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadService {

  private _started: string[] = [];
  private _finished: string[] = [];
  lazyLoadStatus = new BehaviorSubject<boolean>(false);

  constructor() { }

  isFinishedLoading() {
    const completed = this._started.sort().join(',') === this._finished.sort().join(',');
    this.lazyLoadStatus.next(completed);
  }

  addStarted(name: string){
    this._started.push(name);
  }

  addFinished(name: string) {
    this._finished.push(name);
  }
}
