import { Injectable } from '@angular/core';
import {Personne} from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  // declarer personnes
  private personnes: Personne[];
  constructor() {
    this.personnes = [];
  }
  getEmbauchees(): Personne[] {
    return this.personnes;
  }
  // methode pour embauche
  embaucher(personne: Personne): void {
    // indice du objet
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
    this.personnes.push(personne);
    } else  {
       alert(`${personne.name} est déjà sélectionnée`);
    }

  }
  debaucher(personne): void {
    // indice du objet
    const index = this.personnes.indexOf(personne);
    if (index >= 0) {
      this.personnes.splice(index, 1);
    }
  }
}
