import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Player } from '../interfaces/player';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = [];
  dbRef = this.db.collection('games');

  constructor(private db: AngularFirestore) { }

  saveGame(courseName, dif) {
    let game: Game = {course: courseName};
    game.difficulty = dif;
    game.players = this.players;
    this.dbRef.add(game);
  }

  addPlayer(player) {
    player.scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.players.push(player);
    console.log(this.players);
  }
}
