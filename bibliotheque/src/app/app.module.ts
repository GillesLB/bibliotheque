import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { ErreurComponent } from 'src/app/erreur/erreur.component';
import { ListeComponent } from 'src/app/liste/liste.component';
import { AjouterComponent } from 'src/app/ajouter/ajouter.component';

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
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
