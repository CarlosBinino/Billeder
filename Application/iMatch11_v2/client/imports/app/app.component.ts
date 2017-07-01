import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
@InjectUser('user')

export class AppComponent {
  lobbytog=true;
  startoptog=false;
  spillerstat=false;

  isClassVisible:false;
  isClassVisible2:false;

  constructor() {
  }

  logout() {
      Meteor.logout();
  }

  isIn = false;
  toggleState() {
      let bool = this.isIn;
      this.isIn = bool === false ? true : false;
    }
}
