import { CreateGames } from './../../../both/collections/creategames.collection';
import { CreateGame } from './../../../both/models/creategame.model';

export function loadCreateGames() {
  if (CreateGames.find().cursor.count() === 0) {
    const creategames: CreateGame[] = [
  ];

  creategames.forEach((creategame: CreateGame) => CreateGames.insert(creategame));
  }
}
