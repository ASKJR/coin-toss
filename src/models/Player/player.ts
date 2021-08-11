import { Sides } from '../Coin/sides.js';

export default abstract class Player {
  protected side: Sides;

  constructor(pickedSide: Sides) {
    this.side = pickedSide;
  }

  public set pickedSide(side: Sides) {
    this.side = side;
  }

  public get pickedSide(): Sides {
    return this.side;
  }
}
