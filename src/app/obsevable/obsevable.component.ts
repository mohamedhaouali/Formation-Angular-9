import { Component, OnInit } from '@angular/core';
import {observable, Observable} from 'rxjs';

@Component({
  selector: 'app-obsevable',
  templateUrl: './obsevable.component.html',
  styleUrls: ['./obsevable.component.css']
})
export class ObsevableComponent implements OnInit {
  monObservable: Observable<string>;
  mesImages = [
    'med.jpg',
    'cv.png',
    '404.png',
    'zine.jpg'
  ];
  currentImage: string;

  constructor() { }

  ngOnInit(): void {
     this.monObservable =  new Observable(
       (observer) => {
         let i = this.mesImages.length - 1;
         setInterval(
           () => {
                 observer.next(this.mesImages[i]);
                 if (i > 0 ) {
                   i--;
                 } else {
                   i = this.mesImages.length - 1;
                 }
           }
           , 1500);
       }
     );
     this.monObservable.subscribe(
      (result) => {
        console.log(result);
        this.currentImage = result;
      }
    );
  }
}
