import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  // EventEmitter
  @Output() sendRequestToData = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log('Fils component : voici le contenu de la variable color de mon pere', this.filsProperty);
  }

// output
  sendEvent() {
    this.sendRequestToData.emit(
      ` Please can i have some money :)`
    );
  }
}


