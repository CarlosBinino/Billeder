import { Component, ViewEncapsulation } from '@angular/core';
import template from "./lobby.component.html";
import style from "./lobby.component.scss";
import { Spil } from "../data/spildataclass";
import { AktiveSpilService } from './../app.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Game } from '../../../../both/models/game.model';
import { Games } from '../../../../both/collections/games.collection';
import { CreateGame } from '../../../../both/models/creategame.model';
import { CreateGames } from '../../../../both/collections/creategames.collection';

@Component({
    selector: 'lobby',
    template,
    styles: [ style ],
    encapsulation: ViewEncapsulation.None,
})
export class LobbyComponent {
  games: Observable<Game[]>;
  creategames: Observable<CreateGame[]>;
  Spils: Spil[];
  sidenavdata=[];
  objDate:number;

  public lobbyQuery = "";
  public rowsOnPage = 10;
  public sortBy = "Spil";
  public sortOrder = "desc";

  constructor(private AktiveSpilService: AktiveSpilService,private router: Router) {
    this.Spils = this.AktiveSpilService.getSpil();
    this.games = Games.find({}).zone();
    this.creategames = CreateGames.find({}).zone();
    this.objDate = Date.now();
  }

  selectedValue(data) {
    this.sidenavdata=[];
    this.sidenavdata.push(data);
  }
  gotostartop(){
     this.router.navigate(['startop']);
  }

  gamecreated(data): void {
    if (!Meteor.userId()) {
     alert('Log venligst på for at spille');
     return;
   }
   CreateGames.insert(Object.assign({}, data, { owner: Meteor.userId() }));
  }
}
