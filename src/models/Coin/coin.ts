import { Sides } from './sides.js';

export default class Coin {
  private headImgUrl: string;

  private tailImgUrl: string;

  private sideUp: Sides = 0;

  constructor(headImgUrl: string, tailImgUrl: string) {
    this.headImgUrl = headImgUrl;
    this.tailImgUrl = tailImgUrl;
    this.toss();
  }

  private setCoinImg(side: Sides) {
    const imgElement = document.getElementById('coinImg') as HTMLImageElement;
    let imgUrl: string;
    if (side === Sides.head) {
      imgUrl = this.headImgUrl;
    } else {
      imgUrl = this.tailImgUrl;
    }
    imgElement.src = imgUrl;
  }

  private setSideUp(side: Sides) {
    this.sideUp = side;
  }

  public toss(): void {
    let counter = 0;
    let side = Sides.head;
    const interval = setInterval(() => {
      this.setCoinImg(side);
      side = side === Sides.head ? Sides.tail : Sides.head;
      counter += 1;
      if (counter >= 10) {
        clearInterval(interval);
        const index = Math.floor(Math.random() * 2);
        this.setCoinImg(index);
        this.setSideUp(index);
      }
    }, 400);
  }
}
