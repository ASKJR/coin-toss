import Coin from './models/Coin/coin.js';
import User from './models/Player/user.js';
import Machine from './models/Player/machine.js';
import { Sides } from './models/Coin/sides.js';
import Player from './models/Player/player.js';

export default class Game {
  private score: [number, number] = [0, 0];

  private user!: User;

  private machine!: Machine;

  private coin!: Coin;

  private startGameBtn!: HTMLButtonElement;

  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  private init(): void {
    this.coin = new Coin('/images/head.jpg', '/images/tail.jpg');
    this.user = new User(Sides.head);
    this.machine = new Machine(Sides.tail);

    this.startGameBtn = document.getElementById(
      'startGameBtn'
    ) as HTMLButtonElement;
    this.startGameBtn.addEventListener('click', () => {
      this.runMatch();
    });
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

  private runMatch() {
    this.startGameBtn.disabled = true;
    this.coin.toss().then(() => {
      if (this.coin.SideUp === Game.getUserSelectedSide()) {
        this.incrementScore(this.user);
      } else {
        this.incrementScore(this.machine);
      }
      this.renderScore();
      this.startGameBtn.disabled = false;
    });
  }

  private static getUserSelectedSide(): Sides {
    const select = document.getElementById(
      'selectCoinSide'
    ) as HTMLSelectElement;
    if (select.value === 'heads') {
      return Sides.head;
    }
    return Sides.tail;
  }

  private static getMachineSelectedSide(): Sides {
    return this.getUserSelectedSide() === Sides.head ? Sides.tail : Sides.head;
  }
}
