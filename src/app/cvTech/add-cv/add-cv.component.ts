import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CvService} from '../cv.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  // message erreur (cette ligne)
  errorMessage = '';
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addPersonne(formulaire: NgForm) {
    // observables
    this.cvService.addPersonne(formulaire.value).subscribe(
      (response) => {
        const link = ['cv'];
        // router
        this.router.navigate(link);
      },
      error => {
        this.errorMessage = `Problème de connexion à votre serveur.
        Prière de consulter l'adminsitrateur`;
        console.log(error);
      }
    )
  }
}
