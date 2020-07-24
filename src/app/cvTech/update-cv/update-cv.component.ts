import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {

  personne: Personne = null;


  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getPersonneById(params.id).subscribe(
          (personne) => {
            this.personne = personne;
          }
        );
      }
    );
  }

  updatePersonne() {
    this.cvService.updatePersonne(this.personne).subscribe(
      (reponse) => {
        const link = ['cv'];
        this.router.navigate(link);
      }
    );
  }

}
