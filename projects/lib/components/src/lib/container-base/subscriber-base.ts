import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class SubscriberBase implements OnDestroy {
  subscriptions: Subscription[] = [];

  ngOnDestroy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
    this.subscriptions = [];
  }
}