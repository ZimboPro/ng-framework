import { Subscription } from 'rxjs';
import { OnDestroy, OnInit } from '@angular/core';
import { LibFormGroup, IControls } from '../reactive/reactive';
import { ControlContainer } from '@angular/forms';

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