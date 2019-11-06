import { OnDestroy, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IControls, LibFormGroup } from '../reactive/reactive';

export class ComponentBase<T extends IControls> implements OnInit, OnDestroy{
    subscriptions: Subscription[] = [];

    form: LibFormGroup<T>;

    constructor(private controlContainer: ControlContainer) {}

    ngOnInit() {
        this.form = <LibFormGroup<T>>this.controlContainer.control;
    }

    ngOnDestroy() {
        this.form.clearValuesAndValidators();
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
}