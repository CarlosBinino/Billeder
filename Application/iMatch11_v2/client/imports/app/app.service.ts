import { Injectable } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { StartopComponent } from './startopstilling/startopstilling.component';
import { SpillerStatComponent } from './spillerstat/spillerstat.component';
import { Spil, Udvalgte } from './data/spildataclass';
import { SPIL, UDVALGTE } from './data/spildata';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class AktiveSpilService {
  getSpil(): Spil[] {
    return SPIL;
  }
  hentspiller = [];

  getUdvalgte(): Udvalgte[] {
      return UDVALGTE;
  }
}
