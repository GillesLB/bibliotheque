import { Injectable, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import * as firebase from 'firebase';

import { Livre } from 'src/app/modeles/livres';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class AfficherListeService implements OnInit {

  listeLivres: Livre[] = [];
  listeSubject = new Subject<Livre[]>();

  //   {
  //     titre: 'Le train sera-t-il supprimé ?',
  //     auteur: 'Antoine A.',
  //     genre: 'Suspens'
  //   },
  //   {
  //     titre: 'Y\'a plus d\'lait !',
  //     auteur: 'Thierry D.',
  //     genre: 'Comédie'
  //   },
  //   {
  //     titre: 'Le facteur a crevé sous la pluie.',
  //     auteur: 'Olga C.',
  //     genre: 'Drame'
  //   },
  //   {
  //     titre: 'Qui a capturé les derniers pokemons ?',
  //     auteur: 'Kevin L.',
  //     genre: 'Policier'
  //   },
  //   {
  //     titre: 'La trotinette électrique débridée.',
  //     auteur: 'Emmanuel L.',
  //     genre: 'Do it yourself'
  //   },
  //   {
  //     titre: 'Comment bien élever les poules.',
  //     auteur: 'Thomas T.',
  //     genre: 'Tutoriel'
  //   },
  //   {
  //     titre: 'Mon chat est matinal ...',
  //     auteur: 'Johan G.',
  //     genre: 'Vie quotidienne'
  //   },
  //   {
  //     titre: 'Le burndown n\'est pas encore imprimé !',
  //     auteur: 'Marie R.',
  //     genre: 'Tragédie'
  //   },
  //   {
  //     titre: 'Plus besoin d\'Olga sur Véhiparc d\'ici 2020.',
  //     auteur: 'Mathilde R.',
  //     genre: 'Utopie'
  //   },
  //   {
  //     titre: 'Un week-end au Japon.',
  //     auteur: 'Alexandre M.',
  //     genre: 'Voyage'
  //   },
  //   {
  //     titre: 'Mon expérience dans les commandos.',
  //     auteur: 'Yassim B.',
  //     genre: 'Tranche de vie'
  //   },
  //   {
  //     titre: 'Rien ne vaut le CSS maison.',
  //     auteur: 'Nicolas D.',
  //     genre: 'Fake news'
  //   },
  //   {
  //     titre: 'Y a-t-il une vie après GOT ?',
  //     auteur: 'Collectif',
  //     genre: 'Psychologie'
  //   }
  // ];

  constructor() {
    this.getListeLivres();
  }

  ngOnInit() {
  }

  emitListeLivres() {
    this.listeSubject.next(this.listeLivres);
  }

  sauverListeLivres() {
    firebase.database().ref('/listeLivres').set(this.listeLivres);
  }

  getListeLivres() {
    firebase.database().ref('/listeLivres')
      .on('value', (data: DataSnapshot) => {
          this.listeLivres = data.val() ? data.val() : [];
          this.emitListeLivres();
        }
      );
  }

}
