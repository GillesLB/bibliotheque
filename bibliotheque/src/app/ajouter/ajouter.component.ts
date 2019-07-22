import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Livre } from 'src/app/modeles/livres';
import { AfficherListeService } from 'src/app/services/afficher-liste.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  listeLivres;
  ajouterLivreForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private afficherListeService: AfficherListeService,
  ) { }

  ngOnInit() {
    this.afficherListeService.listeLivreSubscription = this.afficherListeService.listeSubject.subscribe(
      (listeLivres: Livre[]) => {
        this.listeLivres = listeLivres;
      }
    );
    this.afficherListeService.emitListeLivres();
    this.initForm();
  }

  initForm() {
    this.ajouterLivreForm = this.formBuilder.group({
      titre: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]/)]],
      auteur: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]/)]],
      genre: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]/)]]
    });
  }

  onSubmitForm() {
    const titre = this.ajouterLivreForm.get('titre').value;
    const genre = this.ajouterLivreForm.get('genre').value;
    const auteur = this.ajouterLivreForm.get('auteur').value;
    const nouveauLivre = new Livre(titre, auteur, genre);

    this.ajouterLivre(nouveauLivre);
    this.router.navigate(['/liste']);
  }

  ajouterLivre(nouveauLivre: Livre) {
    this.listeLivres.push(nouveauLivre);
    this.afficherListeService.emitListeLivres();
    this.afficherListeService.sauverListeLivres();
  }

}
