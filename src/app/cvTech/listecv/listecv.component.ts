import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-listecv',
  templateUrl: './listecv.component.html',
  styleUrls: ['./listecv.component.css']
})
export class ListecvComponent implements OnInit {
  @Input() personnes: Personne[];
  @Output() selectedPersonne = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(selectedPersonne){
    this.selectedPersonne.emit(
      selectedPersonne
    );
  }

}
