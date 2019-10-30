import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { LibFormGroup, IControls } from '../reactive/reactive';

export class ComponentBase<T extends IControls> implements OnDestroy{
    subscriptions: Subscription[] = [];

    form: LibFormGroup<T>;

    ngOnDestroy() {
        this.form.clearValuesAndValidators();
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
}