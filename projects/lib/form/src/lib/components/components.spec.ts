import { TestBed } from '@angular/core/testing';
import { ComponentBase } from './components';

describe('ComponentBase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentBase = TestBed.get(ComponentBase);
    expect(service).toBeTruthy();
  });

  it('subscription array should be defined', () => {
    const service: ComponentBase = TestBed.get(ComponentBase);
    expect(service.subscriptions).toBeTruthy();
  });
});
