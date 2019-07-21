import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AjouterLivreService } from 'src/app/services/ajouter-livre.service';
import { AfficherListeService } from 'src/app/services/afficher-liste.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  ajouterLivreForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ajouterLivreService: AjouterLivreService,
    private afficherLivreService: AfficherListeService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.ajouterLivreForm = this.formBuilder.group({
      titre: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]/)]],
      auteur: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]/)]],
      genre: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]/)]]
    });
  }

  onSubmit() {
    const titre = this.ajouterLivreForm.get('titre').value;
    const auteur = this.ajouterLivreForm.get('auteur').value;
    const genre = this.ajouterLivreForm.get('genre').value;

    this.ajouterLivreService.ajouterLivre(titre, auteur, genre).then(
      () => {
        this.router.navigate(['/liste']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
    this.afficherLivreService.sauverListeLivres();
  }

}
