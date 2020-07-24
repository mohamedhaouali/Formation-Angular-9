import { Component, OnInit } from '@angular/core';
import {CvService} from '../cv.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 personne: Personne;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.cvService.getPersonneById(params.id).subscribe(
          (personne) => {
            this.personne = personne;
          }
        );

      }
    );
  }
  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePersonne(id: number) {
    const link = ['cv/updateCv', id];
    this.router.navigate(link);
  }
}
