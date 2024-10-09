import { TestBed } from '@angular/core/testing';

import { UFCPlayersService } from './ufcplayers.service';

describe('UFCPlayersService', () => {
  let service: UFCPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UFCPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
