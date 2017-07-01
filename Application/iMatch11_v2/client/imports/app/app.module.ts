import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LobbyComponent } from "./lobby/lobby.component";
import { SpillerStatComponent } from "./spillerstat/spillerstat.component";
import { StartopComponent } from "./startopstilling/startopstilling.component";
import { LOBBY_DECLARATIONS } from "./lobby/lobby.index";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { DataTableModule } from "angular2-datatable";
import { LobbyFilterPipe }   from './lobby/lobbytab.pipe';
import { AktiveSpilService } from './app.service';
import { DataFilterPipe }   from './spillerstat/spillerstat.pipe';
import { DataFilterPipe2 }   from './spillerstat/spillerstat.pipe2';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSidenavModule} from '@angular/material';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { AUTH_DECLARATIONS, SHARED_DECLARATIONS } from "./auth/index";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LobbyComponent,
    StartopComponent,
    SpillerStatComponent,
    DataFilterPipe,
    DataFilterPipe2,
    LobbyFilterPipe,
    ...SHARED_DECLARATIONS,
    ...LOBBY_DECLARATIONS,
    ...AUTH_DECLARATIONS
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    AktiveSpilService
  ],
  // Modules
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    DataTableModule,
    MdToolbarModule.forRoot(),
    Ng2DragDropModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AccountsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
