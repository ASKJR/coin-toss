import Coin from './models/Coin/coin.js';

export default class Game {
  private score: [number, number] = [0, 0];

  // eslint-disable-next-line class-methods-use-this
  public start(): void {
    new Coin('/images/head.jpg', '/images/tail.jpg');
  }
}
