import { TestBed } from '@angular/core/testing';
import { LibFormGroup, Controls } from './reactive';
import { FormControl } from '@angular/forms';

interface Test extends Controls {
    name: FormControl
}

describe('LibFormGroup', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const form: LibFormGroup<Test> = new LibFormGroup<Test>({ name: new FormControl()});
    expect(form).toBeTruthy();
  });
  it('should be create controls', () => {
    const form: LibFormGroup<Test> = new LibFormGroup<Test>({ name: new FormControl()});
    expect(form.controls).toBeTruthy();
  });
  it('should be create controls and map controls to interface', () => {
    const form: LibFormGroup<Test> = new LibFormGroup<Test>({ name: new FormControl()});
    expect(form.interfaceControls.name).toBeTruthy();
  });
});
