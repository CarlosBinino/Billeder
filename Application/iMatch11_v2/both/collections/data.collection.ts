import { MongoObservable } from 'meteor-rxjs';

export const Players = new MongoObservable.Collection('test');
export const Stilling = new MongoObservable.Collection('score');
export const Score = new MongoObservable.Collection('score_data_test');
