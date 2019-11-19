import { AfterContentInit, Component, Host, Optional } from '@angular/core';
import { MatFormField } from '@angular/material';

import { SubscriberBase } from '../../container-base/subscriber-base';
import { LibFormControl } from '@lib/form';

@Component({
  selector: '[lib-label],[libLabel]',
  template: `{{ label }}`,
})
export class LabelComponent extends SubscriberBase implements AfterContentInit {
  label = '';

  private control: LibFormControl;

  constructor(
    @Optional() @Host() private formFieldInput: MatFormField
  ) {
    super();
  }

  ngAfterContentInit() {
    this.control = this.formFieldInput._control.ngControl.control as LibFormControl;
    this.label = this.control.label;
    // this.subscriptions.push(
    //   this.control.statusChanges.subscribe(_ => {
    //   }));
  }
}
