import { Meteor } from 'meteor/meteor';
import { Main } from "./imports/server-main/main";
import { loadGames } from "./imports/fixtures/games";
import { loadCreateGames } from "./imports/fixtures/creategames";

Meteor.startup(() => {
  loadGames();
});

Meteor.startup(() => {
  loadCreateGames();
});
/*
const mainInstance = new Main();
mainInstance.start();
*/
