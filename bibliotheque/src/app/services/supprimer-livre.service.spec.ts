import { TestBed } from '@angular/core/testing';

import { SupprimerLivreService } from './supprimer-livre.service';

describe('SupprimerLivreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupprimerLivreService = TestBed.get(SupprimerLivreService);
    expect(service).toBeTruthy();
  });
});
