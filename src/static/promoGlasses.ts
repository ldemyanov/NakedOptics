import { en } from "@lang/index";

export enum Category {
  GLASSES = 'glasses',
  GOGGLES = 'goggles',
  OTHERS = 'others',
}

type PromoGlasses = {
  order: number,
  nameEn: string,
  img: string,
  category: Category,
}

const promoGlasses: PromoGlasses[] = [
  {
    order: 1,
    nameEn: en.promo.sunGlusses,
    img: "img/sunGlassesMini.png",
    category: Category.GLASSES,
  },
  {
    order: 2,
    nameEn: en.promo.sportGlusses,
    img: "img/sportGlassesMini.png",
    category: Category.GLASSES,
  },
  {
    order: 3,
    nameEn: en.promo.bycicle,
    img: "img/bycicleGlassesMini.png",
    category: Category.GLASSES,
  },
  {
    order: 4,
    nameEn: en.promo.bikeGoggles,
    img: "img/bikeGogglesMini.png",
    category: Category.GOGGLES,
  },
  {
    order: 5,
    nameEn: en.promo.skiGoggles,
    img: "img/skiGogglesMini.png",
    category: Category.GOGGLES,
  },
  {
    order: 6,
    nameEn: en.promo.lenses,
    img: "img/lenses.png",
    category: Category.OTHERS,
  },
  {
    order: 7,
    nameEn: en.promo.accesories,
    img: "img/accesories.png",
    category: Category.OTHERS,
  }
];

export default promoGlasses;