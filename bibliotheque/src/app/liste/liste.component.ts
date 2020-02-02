import { Component, OnInit } from '@angular/core';

import { AfficherListeService } from 'src/app/services/afficher-liste.service';
import { Livre } from 'src/app/modeles/livres';
import { Subscription } from 'rxjs';
import { SupprimerLivreService } from 'src/app/services/supprimer-livre.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  data;
  min = 0;
  max = 4;
  pageIndex = 0;
  pageSize = 4;

  value = 73;

  listeLivres;
  isLoading = false;

  listeLivreSubscription: Subscription;

  displayedColumns: string[] = ['position', 'name', 'weight'];

  constructor(
    private afficherListeService: AfficherListeService,
    private supprimerLivreService: SupprimerLivreService,
  ) { }

  ngOnInit() {
    this.loadData();

  }

  loadData() {
    this.isLoading = true;

    this.listeLivreSubscription = this.afficherListeService.listeSubject.subscribe(
      (listeLivres: Livre[]) => {
        this.listeLivres = listeLivres;
        this.data = this.listeLivres.slice(this.min, this.max);
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
    this.afficherListeService.emitListeLivres();
  }

  loadPagePlus() {
    this.min += 4;
    this.max += 4;
    this.data = this.listeLivres.slice(this.min, this.max);
  }

  loadPageMoins() {
    this.min -= 4;
    this.max -= 4;
    this.data = this.listeLivres.slice(this.min, this.max);
  }

  /**
   * Changement de page
   * @param event
   */
  changePage(event) {
    console.log('event : ', event);
    this.pageSize = event.pageSize;
    (event.pageIndex > this.pageIndex) ? this.loadPagePlus() : this.loadPageMoins();
    this.pageIndex = event.pageIndex;
  }

  supprimer(livre) {
    const livreASupprimer = this.listeLivres.findIndex(
      (livreIndex) => {
        if (livreIndex === livre) {
          return true;
        }
      }
    );
    this.listeLivres.splice(livreASupprimer, 1);
    this.afficherListeService.emitListeLivres();
    this.afficherListeService.sauverListeLivres();
  }

  onSupprimer(livre) {
    this.supprimer(livre);
  }

}
