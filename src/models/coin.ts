export default class Coin {
  private headImgUrl: string;

  private tailImgUrl: string;

  constructor(headImgUrl: string, tailImgUrl: string) {
    this.headImgUrl = headImgUrl;
    this.tailImgUrl = tailImgUrl;

    const img = document.getElementById('coinImg') as HTMLImageElement;
    img.src = this.tailImgUrl;
  }
}
