import Coin from './models/Coin/coin.js';
import User from './models/Player/user.js';
import Machine from './models/Player/machine.js';
import { Sides } from './models/Coin/sides';
import Player from './models/Player/player.js';

export default class Game {
  private score: [number, number] = [0, 0];

  private user!: User;

  private machine!: Machine;

  // eslint-disable-next-line class-methods-use-this
  public start(): void {
    new Coin('/images/head.jpg', '/images/tail.jpg');
    this.user = new User(Sides.head);
    this.machine = new Machine(Sides.tail);
    this.incrementScore(this.user);
    this.incrementScore(this.user);
    this.renderScore();
  }

  private incrementScore(player: Player) {
    if (player instanceof User) {
      this.score[0] += 1;
    } else {
      this.score[1] += 1;
    }
  }

  private renderScore() {
    const userScoreDivEl = document.getElementById(
      'userScore'
    ) as HTMLDivElement;
    const machineScoreDivEl = document.getElementById(
      'machineScore'
    ) as HTMLDivElement;

    userScoreDivEl.innerText = this.score[0].toString();
    machineScoreDivEl.innerText = this.score[1].toString();
  }
}
