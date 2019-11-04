import { TestBed } from '@angular/core/testing';
import { LibFormGroup, IControls } from './reactive';
import { FormControl } from '@angular/forms';
import { LibFormControl } from './control';

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
