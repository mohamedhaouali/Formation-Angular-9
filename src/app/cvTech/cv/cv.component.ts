import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {PremierService} from '../../premier.service';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    // modification
    this.cvService.getPersonnes().subscribe(
      (personnes) =>
      {this.personnes = personnes;
  },
      (error) => {
        alert('Problème d\'accès à l api les données affichées sont fake');
        console.log(error);
        //appel methode
        this.cvService.getFakePersonnes();
      }
    );
  }
  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }

}
