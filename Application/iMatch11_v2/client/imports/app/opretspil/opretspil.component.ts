import { Component, OnInit } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import template from './opretspil.component.html';
import { Games } from '../../../../both/collections/games.collection';
import style from "./opretspil.component.scss";
import { Game } from '../../../../both/models/game.model';
import { Observable } from 'rxjs/Observable';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'opretspil',
  template,
  styles: [ style ]
})
@InjectUser('user')
export class OpretSpilComponent implements OnInit {
  addForm: FormGroup;
  games: Observable<Game[]>;
  user: Meteor.User;

  constructor(
    private formBuilder: FormBuilder
  ) {
      this.games = Games.find({}).zone();
  }

  ngOnInit() {
    console.log(this.user);
    this.addForm = this.formBuilder.group({
       SpilType: [],
       Type: [],
       Deltagere: [],
       Pulje: [],
       Tid: [],
       NumPlayers: []
    });
  }

  addParty(): void {
    if (!Meteor.userId()) {
     alert('Log venligst på for at oprette et spil');
     return;
   }
    if (this.addForm.valid) {
      Games.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));
      this.addForm.reset();
    }
  }

  removeGame(game: Game): void {
    Games.remove(game._id);
  }
}
