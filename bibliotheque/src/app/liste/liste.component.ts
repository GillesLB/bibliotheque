import { Component, OnInit } from '@angular/core';

import { AfficherListeService } from 'src/app/services/afficher-liste.service';
import { Livre } from 'src/app/modeles/livres';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  listeLivres;
  page = 1;
  pageSize = 5;

  listeLivreSubscription: Subscription;

  constructor(
    private afficherListeService: AfficherListeService,
  ) { }

  ngOnInit() {
    this.listeLivreSubscription = this.afficherListeService.listeSubject.subscribe(
      (listeLivres: Livre[]) => {
        this.listeLivres = listeLivres;
      }
    );
    this.afficherListeService.emitListeLivres();
  }

}
