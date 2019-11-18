import { AfterContentInit, Component, Host, Optional } from '@angular/core';
import { MatFormField } from '@angular/material';

import { SubscriberBase } from '../../container-base/subscriber-base';

@Component({
  selector: '[lib-error]',
  template: `<div> Error: {{ errorMessage }} </div>`,
})
export class ErrorComponent extends SubscriberBase implements AfterContentInit {
  errorMessage = '';

  constructor(
    @Optional() @Host() private formFieldInput: MatFormField
  ) {
    super();
    console.log('create')
  }

  ngAfterContentInit() {
    console.log('create sub')
    this.subscriptions.push(
      this.formFieldInput._control.ngControl.control.statusChanges.subscribe(_ => {
        const errors = this.formFieldInput._control.ngControl.control.errors;
        for (const error in errors) {
          if (errors.hasOwnProperty(error)) {
            const element = errors[error];
            this.errorMessage = element['message'];
            if (this.errorMessage == null || this.errorMessage === '') {
              this.errorMessage = `No message for error ${error}`;
            }
            console.log(this.errorMessage);
            break;
          }
        }
      }));
  }

}
