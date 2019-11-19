import { AfterContentInit, Component, Host, Optional } from '@angular/core';
import { MatFormField } from '@angular/material';
import { distinctUntilChanged } from 'rxjs/operators';

import { SubscriberBase } from '../../container-base/subscriber-base';
import { ErrorMessages, nameStr, valueStr } from './error.dict';
import { LibFormControl } from '@lib/form';

@Component({
  selector: '[lib-error],[libError]',
  template: `{{ errorMessage }}`,
})
export class ErrorComponent extends SubscriberBase implements AfterContentInit {
  errorMessage = '';

  private control: LibFormControl;

  constructor(
    @Optional() @Host() private formFieldInput: MatFormField
  ) {
    super();
  }

  ngAfterContentInit() {
    this.control = this.formFieldInput._control.ngControl.control as LibFormControl;
    this.subscriptions.push(
      this.control.statusChanges.subscribe(_ => {
        const errors = this.control.errors;
        if (errors != null) {
          console.log(errors);
          for (const errorName in errors) {
            if (errors.hasOwnProperty(errorName)) {
              const error = errors[errorName];
              this.errorMessage = this.getMessage(errorName, error);
              console.log(this.errorMessage);
              break;
            }
          }
        }
      }));
  }

  getMessage(errorName: string, error: any): string {
    const label = this.control.label || 'No label';
    if (typeof(error) === 'boolean' && error === true) {
      return (ErrorMessages[errorName] as string).replace(nameStr, this.control.label);
    }
    const message = error['message'] as string;
    if (message != null && message != '') {
      return message.replace(nameStr, this.control.label);
    }
    const value = error['value'];
    if (value != null) {
      return (ErrorMessages[errorName] as string).replace(valueStr, value).replace(nameStr, this.control.label);
    }
    return `No message for error ${errorName}`
  }
}
