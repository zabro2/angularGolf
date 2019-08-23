import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = [];

  constructor() { }

  getAllPlayers() {
    return this.players;
  }

  addPlayer(player) {
    let playerObj = player;
    playerObj.scores = [
      { hole1: 0 },
      { hole2: 0 },
      { hole3: 0 },
      { hole4: 0 },
      { hole5: 0 },
      { hole6: 0 },
      { hole7: 0 },
      { hole8: 0 },
      { hole9: 0 },
      { hole10: 0 },
      { hole11: 0 },
      { hole12: 0 },
      { hole13: 0 },
      { hole14: 0 },
      { hole15: 0 },
      { hole16: 0 },
      { hole17: 0 },
      { hole18: 0 }
    ];
    playerObj.totals = [
      { out: 0 },
      { in: 0 },
      { total: 0 }
    ];
    this.players.push(playerObj);
    console.log(this.players);
  }
}

// console.log(Object.values(playerObj.scores[0])[0]) accessing the score//
