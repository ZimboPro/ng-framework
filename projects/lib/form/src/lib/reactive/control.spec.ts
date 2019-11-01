import { TestBed } from '@angular/core/testing';
import { LibFormControl } from './control';

describe('LibFormControl', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const form: LibFormControl = new LibFormControl(null);
    expect(form).toBeTruthy();
  });
});
