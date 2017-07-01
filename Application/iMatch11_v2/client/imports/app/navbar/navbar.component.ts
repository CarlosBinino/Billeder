import { Component } from '@angular/core';
import template from "./navbar.component.html";
import style from "./navbar.component.scss";

@Component({
    selector: 'navbar',
    template,
    styles: [ style ]
})
export class NavbarComponent {

  constructor() {
  }

  isIn = false;
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }


}
