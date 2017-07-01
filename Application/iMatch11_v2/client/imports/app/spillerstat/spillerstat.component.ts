import { Component, NgModule } from "@angular/core";
import template from "./spillerstat.component.html";
import style from "./spillerstat.component.scss";
import { Players, Stilling, Score } from '../../../../both/collections/data.collection';
import { Observable } from 'rxjs/Observable';
import { AktiveSpilService } from './../app.service';

@Component({
  selector: "spillerstat",
  template,
  styles: [ style ]
})
export class SpillerStatComponent {
  stat: Observable<any[]>;
  basicRowHeight=18;
  spiller = [];

  public filterQuery = "";
  public filterQuery2 = "";
  public rowsOnPage = 10;
  public sortBy = "total_matches";
  public sortOrder = "desc";

  overordnet=true;
  offaktion=false;
  defaktion=false;
  aflevering=false;
  maalmand=false;

  holdvalgt=true;
  hvtrue=false;
  hvfalse=true;

  constructor(private AktiveSpilService: AktiveSpilService) {
    this.stat = Score.find({}).zone();
    this.spiller = this.AktiveSpilService.hentspiller;
    if(this.holdvalgt!=null) {
      this.hvtrue=true;
      this.hvfalse=false;
    }
  }

  add(item: any) {
    let tjek=this.spiller.filter(x => x == item)[0];
    if(tjek == null) {
      this.AktiveSpilService.hentspiller.push(item);
    };
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map((e) => {
      return e.name
    }).indexOf(item.name);
      list.splice(index, 1);
  }

}
