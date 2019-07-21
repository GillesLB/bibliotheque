import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { ErreurComponent } from 'src/app/erreur/erreur.component';
import { ListeComponent } from 'src/app/liste/liste.component';
import { AjouterComponent } from 'src/app/ajouter/ajouter.component';
import { AfficherListeService } from 'src/app/services/afficher-liste.service';
import { AjouterLivreService } from 'src/app/services/ajouter-livre.service';
import { SupprimerLivreService } from 'src/app/services/supprimer-livre.service';
import { PaginationServiceService } from 'src/app/services/pagination-service.service';
import { PaginationComponent } from 'src/app/pagination/pagination.component';


const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'ajouter', component: AjouterComponent },
  { path: '', component: AccueilComponent },
  { path: '**', component: ErreurComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    ErreurComponent,
    ListeComponent,
    AjouterComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AfficherListeService,
    AjouterLivreService,
    SupprimerLivreService,
    PaginationServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
