import { Subscription } from 'rxjs';
import { OnDestroy, OnInit } from '@angular/core';
import { LibFormGroup, IControls } from '../reactive/reactive';
import { ControlContainer } from '@angular/forms';
export declare class ComponentBase<T extends IControls> implements OnInit, OnDestroy {
    private controlContainer;
    subscriptions: Subscription[];
    form: LibFormGroup<T>;
    constructor(controlContainer: ControlContainer);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
