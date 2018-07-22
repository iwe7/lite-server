import { TestBed, inject } from '@angular/core/testing';

import { SchematicsService } from './schematics.service';

describe('SchematicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchematicsService]
    });
  });

  it('should be created', inject([SchematicsService], (service: SchematicsService) => {
    expect(service).toBeTruthy();
  }));
});
