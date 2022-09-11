import { Dice } from './Dice';

export class Player {
  name: string;
  score: number;
  /*   dice: Dice; */
  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
}
