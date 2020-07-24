import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // subscribe pour inscrire
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        console.log('response', response);

    },
      // en cas error
      () => {
        console.log('error', error);
      },
      () => {
       console.log('complete :>');
      }
    );
  }

}
