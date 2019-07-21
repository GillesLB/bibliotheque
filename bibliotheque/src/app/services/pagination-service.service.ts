import { Injectable, OnInit } from '@angular/core';

import { AfficherListeService } from 'src/app/services/afficher-liste.service';

@Injectable({
  providedIn: 'root'
})
export class PaginationServiceService implements OnInit {

  listeLivres;

  constructor(
    private afficherListeService: AfficherListeService,
  ) { }

  ngOnInit() {
    this.listeLivres = this.afficherListeService.listeLivres;
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5) {
    // calcule le nombre total de page
    const totalPages = Math.ceil(totalItems / pageSize);

    // s'assure que le rang de la page est possible
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage: number;
    let endPage: number;

    if (totalPages <= 5) {
        // si moins de 6 pages, on montre tout
        startPage = 1;
        endPage = totalPages;
    } else {
        // si 6 ou plus, on ajoute "début" et "fin"
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 5;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calcule le index de début et de fin
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // crée un tableau de pages to ng-repeat in the pager control
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // retourne un objet contenant toutes les propriétés nécessaires à la vue
    // return {
    //   totalItems: totalItems,
    //   currentPage: currentPage,
    //   pageSize: pageSize,
    //   totalPages: totalPages,
    //   startPage: startPage,
    //   endPage: endPage,
    //   startIndex: startIndex,
    //   endIndex: endIndex,
    //   pages: pages
    // };

  }

}
