import { TestBed, inject } from '@angular/core/testing';

import { SquadsService } from './squads.service';

describe('SquadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquadsService]
    });
  });

  it('should be created', inject([SquadsService], (service: SquadsService) => {
    expect(service).toBeTruthy();
  }));
});
