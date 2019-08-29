import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, } from '@angular/fire/firestore';
import { Player } from '../interfaces/player';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = [];
  dbRef = this.db.collection<Player>('players');

  constructor(private db: AngularFirestore) { }

  savePlayer(player) {
    this.dbRef.add(player);
  }

  updatePlayer(player) {
    this.dbRef.doc(player).update(player);
  }

  getPlayersObservable(): Observable<Player[]> {
    return this.dbRef.snapshotChanges().pipe(
      map(
        (items: DocumentChangeAction<Player>[]): Player[] => {
          return items.map(
            (item: DocumentChangeAction<Player>): Player => {
              return {
                id: item.payload.doc.id,
                name: item.payload.doc.data().name,
                scores: item.payload.doc.data().scores
              };
            }
          );
        }
      )
    );
  }

  addPlayer(player) {
    player.scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.players.push(player);
    console.log(this.players);
  }
}
