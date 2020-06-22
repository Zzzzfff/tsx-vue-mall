import { request } from './request';

export function getDetail(iid: number): Promise<any> {
  return request({
    url: '/detail',
    params: {
      iid,
    },
  });
}

export function getRecommend(): Promise<any> {
  return request({
    url: '/recommend',
  });
}

export interface IGoods {
  title: string;
  desc: string;
  newPrice: string;
  oldPrice: string;
  realPrice: string;
  discount: string;
  columns: string[];
  services: object[];
}
export class Goods implements IGoods {
  public title: string;
  public desc: string;
  public newPrice: string;
  public oldPrice: string;
  public realPrice: string;
  public discount: string;
  public columns: string[];
  public services: object[];
  constructor(itemInfo: any, columns: string[], services: object[]) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

interface Ishop {
  logo: string;
  name: string;
  fans: number;
  sells: number;
  score: object[];
  goodsCount: number;
}
export class Shop implements Ishop {
  public logo: string;
  public name: string;
  public fans: number;
  public sells: number;
  public score: object[];
  public goodsCount: number;
  constructor(shopInfo: any) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

interface IGoodsParam {
  image: string;
  infos: object[];
  sizes: string[][];
}
export class GoodsParam implements IGoodsParam {
  public image: string;
  public infos: object[];
  public sizes: string[][];
  constructor(info: any, rule: any) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables['0'];
  }
}

interface IUserComment {
  avatar: string;
  uname: string;
  content: string;
  created: number;
  style: string;
}
export class UserComment implements IUserComment {
  public avatar: string;
  public uname: string;
  public content: string;
  public created: number;
  public style: string;
  constructor(rate: any) {
    this.avatar = rate.list[0].user.avatar;
    this.uname = rate.list[0].user.uname;
    this.content = rate.list[0].content;
    this.created = rate.list[0].created;
    this.style = rate.list[0].style;
  }
}
