import { OnInit, Injector, OnDestroy, Input } from '@angular/core';
import { IControls, LibFormGroup } from '@lib/form';
import { ControlContainer } from '@angular/forms';
import { SubscriberBase } from './subscriber-base';

export abstract class ContainerBaseComponent<T extends IControls> extends SubscriberBase implements OnInit {

  @Input() form: LibFormGroup<T>;
  _data: ControlContainer

  constructor(
    private _injector: Injector
  ) { 
    super();
  }

  private _assign(data) {
    this.form = (data.controls || data) as LibFormGroup<T>;
  }
  
  ngOnInit() {
    if (!this.form) {
      if (!this._data) {
        this._data = this._injector.get(ControlContainer);
      }
      this._assign(this._data);
    }
    this.subscriptions = [];
  }
}
