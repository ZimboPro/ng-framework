import { OnInit, Injector, OnDestroy } from '@angular/core';
import { IControls, LibFormGroup } from '@lib/form';
import { ControlContainer } from '@angular/forms';
import { Subscription } from 'rxjs';

export abstract class ContainerBaseComponent<T extends IControls> implements OnInit, OnDestroy {

  form: LibFormGroup<T>;
  subscriptions: Subscription[];
  _data: ControlContainer

  constructor(
    private _injector: Injector
  ) { }

  private _assign(data) {
    this.form = data as LibFormGroup<T>;
  }

  ngOnInit() {
    if (!this._data) {
      this._data = this._injector.get(ControlContainer);
    }
    this._assign(this._data);
  }

  ngOnDestroy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
