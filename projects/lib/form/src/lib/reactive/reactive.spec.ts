import { TestBed } from '@angular/core/testing';

import { LibFormControl } from './control';
import { IControls, LibFormGroup } from './reactive';

interface Test extends IControls {
    name: LibFormControl
}

describe('LibFormGroup', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const form: LibFormGroup<Test> = new LibFormGroup<Test>({ name: new LibFormControl()});
    expect(form).toBeTruthy();
  });
  it('should be create controls', () => {
    const form: LibFormGroup<Test> = new LibFormGroup<Test>({ name: new LibFormControl()});
    expect(form.controls).toBeTruthy();
  });
  it('should be create controls and map controls to interface', () => {
    const form: LibFormGroup<Test> = new LibFormGroup<Test>({ name: new LibFormControl()});
    expect(form.controls.name).toBeTruthy();
  });
});
