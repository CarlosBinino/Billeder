import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';
import { StartopComponent }      from './startopstilling/startopstilling.component';
import { SpillerStatComponent }  from './spillerstat/spillerstat.component';
import { OpretSpilComponent }  from './opretspil/opretspil.component';
import { AppComponent }  from './app.component';
import {LoginComponent} from "./auth/login.component";
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";

const routes: Routes = [
  { path: '', redirectTo: 'lobby', pathMatch: 'full' },
  { path: 'spillerstat', component: SpillerStatComponent },
  { path: 'startop',     component: StartopComponent },
  { path: 'lobby',  component: LobbyComponent },
  { path: 'opretspil',  component: OpretSpilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
