import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class ComponentBase implements OnDestroy{
    subscriptions: Subscription[] = [];

    ngOnDestroy() {
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
}