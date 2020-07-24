import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {CvService} from '../cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  chaine = '';
  serachResult: Personne[];
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serachResult = [];
  }

  search() {
    const name = this.chaine.trim();
    if (name.length) {
      // findByName jeya min cv.service.ts
      this.cvService.findByName(name).subscribe(
        (personnes) => {
          console.log(personnes);
          this.serachResult = personnes;
        }
      );
    } else {
      this.serachResult = [];
    }
  }
  selectPeronne(personne: Personne) {
    // router
    const link = ['cv', personne.id];
    this.router.navigate(link);
    // supprimer ce qui trouve dans le resultat du recherche
    this.serachResult = [];
    this.chaine = '';
  }
}
