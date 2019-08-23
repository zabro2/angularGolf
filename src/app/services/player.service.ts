import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players = [];

  constructor() { }

  getAllPlayers() {
    return this.players;
  }

  getPlayer(player) {
    let found = this.players.filter(person => {
      person.name.toLowerCase() === player.toLowerCase();
    });
    return found[0];
  }

  addPlayer(player) {
    this.players.push(player)
  }
}
