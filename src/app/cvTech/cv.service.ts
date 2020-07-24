import { Injectable } from '@angular/core';
import {Personne} from '../Model/Personne';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {parseErrorsFromMarkup} from 'tslint/lib/verify/parse';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne [];
  link = 'http://localhost:3000/api/personnes';
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 36, 'as.jpg', 11111111,  'Assistant Professor' ),
      new Personne(2, 'zidan', 'zineddine', 42, 'zizou.jpeg', 22222222,  'Football Player / Coach' ),
    ];
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne []>(this.link);
  }
  getFakePersonnes() {
    return this.personnes;
  }
  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>( this.link + `/${id}`);
  }
  addPersonne(personne: Personne): Observable<any> {
    return this.http.post(this.link, personne);
  }
  deletePersonne(id: number) {
    return this.http.delete(this.link + `/${id}` );
  }
  updatePersonne(personne: Personne) {
    console.log(personne);
    return this.http.put(this.link, personne);
  }
  findByName(name): Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne[]>(this.link, {params});
  }
}
