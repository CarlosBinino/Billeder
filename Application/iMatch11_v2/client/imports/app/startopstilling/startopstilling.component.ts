import { Component, NgModule, ViewContainerRef, ViewEncapsulation, ViewChild } from '@angular/core';
import template from "./startopstilling.component.html";
import style from "./startopstilling.component.scss";
import { Observable } from 'rxjs/Observable';
import { Udvalgte } from "../data/spildataclass";
import { AktiveSpilService } from './../app.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateGame } from '../../../../both/models/creategame.model';
import { CreateGames } from '../../../../both/collections/creategames.collection';

@Component({
    selector: 'startop',
    template,
    styles: [ style ]
})
export class StartopComponent {
  creategames: Observable<CreateGame[]>;

  constructor(private router: Router) {
    this.creategames = CreateGames.find({}).zone();
  }

}
  /*
  Udvalgt: Udvalgte[];
  spiller = [];

  public opstilling='4-4-2';
  public sortBy = "";
  public sortOrder = "desc";

  droppedAngriber = [];
  droppedMidtbane = [];
  droppedForsvar = [];
  droppedMaalmand = [];
  droppedItems = [];

  maalmand=1;
  forsvar=4;
  midtbane=4;
  angriber=2;

  constructor(private AktiveSpilService: AktiveSpilService,private router: Router) {
    this.Udvalgt = this.AktiveSpilService.getUdvalgte();
    this.spiller = this.AktiveSpilService.hentspiller;
    if (this.opstilling='4-4-2') {
      this.forsvar=4;
      this.midtbane=4;
      this.angriber=2;}
    else if(this.opstilling='4-3-3') {
      this.forsvar=4;
      this.midtbane=3;
      this.angriber=3;};
  }

  gotostat(){
     this.router.navigate(['spillerstat']);
  }

  onPlayerDrop(e: any) {
    let tjek=this.spiller.filter(x => x == e.dragData)[0];
    if(tjek == null) {
      this.spiller.push(e.dragData);
      if(e.dragData.Position ==='Angriber')
        this.removeItem(e.dragData, this.droppedAngriber);
      else if(e.dragData.Position ==='Midtbane')
        this.removeItem(e.dragData, this.droppedMidtbane);
      else if(e.dragData.Position ==='Målmand')
        this.removeItem(e.dragData, this.droppedMaalmand);
      else
        this.removeItem(e.dragData, this.droppedForsvar);
    };
  }

onAngriberDrop(e: any) {
  let tjek=this.droppedAngriber.filter(x => x == e.dragData)[0];
  if(tjek == null) {
  if (this.droppedAngriber.length <= this.angriber) {
    this.droppedAngriber.push(e.dragData);
    this.removeItem(e.dragData, this.spiller);
    }
  }
}

onMidtbaneDrop(e: any) {
  let tjek=this.droppedMidtbane.filter(x => x == e.dragData)[0];
  if(tjek == null) {
  if (this.droppedMidtbane.length <=this.midtbane ) {
    this.droppedMidtbane.push(e.dragData);
    this.removeItem(e.dragData, this.spiller);
    }
  }
}


onForsvarDrop(e: any) {
  let tjek=this.droppedForsvar.filter(x => x == e.dragData)[0];
  if(tjek == null) {
  if (this.droppedForsvar.length <= this.forsvar ) {
    this.droppedForsvar.push(e.dragData);
    this.removeItem(e.dragData, this.spiller);
    }
  }
}

onMaalmandDrop(e: any) {
  let tjek=this.droppedMaalmand.filter(x => x == e.dragData)[0];
  if(tjek == null) {
  if (this.droppedMaalmand.length <= this.maalmand ) {
    this.droppedMaalmand.push(e.dragData);
    this.removeItem(e.dragData, this.spiller);
    }
  }
}

  removeItem(item: any, list: Array<any>) {
    let index = list.map((e) => {
      return e.name
    }).indexOf(item.name);
      list.splice(index, 1);
  }

}
*/
