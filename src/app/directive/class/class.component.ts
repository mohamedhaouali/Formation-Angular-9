import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
// teams zidtha
  show = true;
  teams = [
    'est',
    'om',
    'barca',
    'milan'
  ];

  est = false;
  milan = true;
  barca = false;



  constructor() { }

  ngOnInit(): void {
  }

  changeTeam() {
    this.est = true;
    this.barca = false;
    this.milan = false;
  }
}
