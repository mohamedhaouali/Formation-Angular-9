import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mohamed Haouali';
  bgColor = 'yellow';
  show = false;
  changeStatus() {
    this.show = !this.show;
  }
}
