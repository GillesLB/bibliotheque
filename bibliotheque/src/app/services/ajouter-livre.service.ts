import { Injectable, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Livre } from 'src/app/modeles/livres';
import { AfficherListeService } from 'src/app/services/afficher-liste.service';

@Injectable({
  providedIn: 'root'
})
export class AjouterLivreService implements OnInit, OnDestroy {

  listeLivres: Livre[] = [];

  listeLivreSubscription: Subscription;

  constructor(
    private afficherListeService: AfficherListeService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.listeLivreSubscription.unsubscribe();
  }

}
