import { Games } from './../../../both/collections/games.collection';
import { Game } from './../../../both/models/game.model';

export function loadGames() {
  if (Games.find().cursor.count() === 0) {
    const games: Game[] = [
  ];

  games.forEach((game: Game) => Games.insert(game));
  }
}

/*
  {SpilType: 'PL Runde 2',
  Deltagere: 200,
  Pulje: 1000,
  Tid: 1}*/
