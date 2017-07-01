import {LoginComponent} from "./login.component";
import {SignupComponent} from "./signup.component";
import {RecoverComponent} from "./recover.component";
import { DisplayNamePipe } from './display-name.pipe';

export const AUTH_DECLARATIONS = [
  LoginComponent,
  SignupComponent,
  RecoverComponent
];

export const SHARED_DECLARATIONS: any[] = [
  DisplayNamePipe
];
