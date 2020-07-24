import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visibility = false;

  constructor(
    public authetificationService: AuthentificationService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    // appel il service authetificationService
    this.authetificationService.logout();
  }

  show() {
    this.visibility = !this.visibility;
  }
}
