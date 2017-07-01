import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { Game } from '../models/game.model';

export const Games = new MongoObservable.Collection<Game>('games');

function loggedIn() {
  return !!Meteor.user();
}

Games.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
