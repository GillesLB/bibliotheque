import { TestBed } from '@angular/core/testing';

import { AjouterLivreService } from './ajouter-livre.service';

describe('AjouterLivreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjouterLivreService = TestBed.get(AjouterLivreService);
    expect(service).toBeTruthy();
  });
});
