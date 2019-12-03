import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AfficherListeService } from 'src/app/services/afficher-liste.service';
import { Subscription } from 'rxjs';
import { Livre } from 'src/app/modeles/livres';

@Injectable({
  providedIn: 'root'
})
export class SupprimerLivreService {

  listeLivres;

  constructor(
    private afficherListeService: AfficherListeService,
    private router: Router,
  ) { }


}
