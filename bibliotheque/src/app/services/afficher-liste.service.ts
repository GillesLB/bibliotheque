import { Injectable, OnInit } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import * as firebase from 'firebase';

import { Livre } from 'src/app/modeles/livres';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class AfficherListeService implements OnInit {

  listeLivres: Livre[] = [];
  listeSubject = new Subject<Livre[]>();

  listeLivreSubscription: Subscription;

  constructor() {
    this.getListeLivres();
  }

  ngOnInit() {

  }

  // déclanche le Subject pour émettre listeLivres
  emitListeLivres() {
    this.listeSubject.next(this.listeLivres);
  }

  // sauvegarder la liste des livres dans firebase
  sauverListeLivres() {
    firebase.database().ref('/listeLivres').set(this.listeLivres);
  }

  // récupérer la liste des livres sauvegardés dans firebase
  getListeLivres() {
    firebase.database().ref('/listeLivres')
      .on('value', (data: DataSnapshot) => {
          this.listeLivres = data.val() ? data.val() : [];
          this.emitListeLivres();
        }
      );
  }

}
