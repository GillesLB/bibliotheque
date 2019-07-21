import { TestBed } from '@angular/core/testing';

import { AfficherListeService } from './afficher-liste.service';

describe('AfficherListeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfficherListeService = TestBed.get(AfficherListeService);
    expect(service).toBeTruthy();
  });
});
