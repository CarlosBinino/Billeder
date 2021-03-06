import { CollectionObject } from './collection-object.model';

export interface CreateGame extends CollectionObject {
  SpilType: string;
  Type:string;
  NumPlayers:number;
  Deltagere: number;
  Pulje: number;
  Tid: number;
  owner?: string;
}
