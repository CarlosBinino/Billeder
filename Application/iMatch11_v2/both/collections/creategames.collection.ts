import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { CreateGame } from '../models/creategame.model';

export const CreateGames = new MongoObservable.Collection<CreateGame>('creategames');

function loggedIn() {
  return !!Meteor.user();
}

CreateGames.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
