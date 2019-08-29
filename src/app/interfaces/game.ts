import { Player } from './player'

export interface Game {
  course: string;
  difficulty?: string;
  players?: Player[]
}
