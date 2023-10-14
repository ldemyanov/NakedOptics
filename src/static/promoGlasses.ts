import { en } from "@lang/index";

type PromoGlasses = {
  order: number,
  nameEn: string,
  img: string,
}

const promoGlasses: PromoGlasses[] = [
  {
    order: 1,
    nameEn: en.promo.sunGlusses,
    img: "img/sunGlassesMini.png"
  },
  {
    order: 2,
    nameEn: en.promo.sportGlusses,
    img: "img/sportGlassesMini.png",
  },
  {
    order: 3,
    nameEn: en.promo.bysicle,
    img: "img/bycicleGlassesMini.png"
  },
  {
    order: 4,
    nameEn: en.promo.bikeGoggles,
    img: "img/bikeGogglesMini.png",
  },
  {
    order: 5,
    nameEn: en.promo.skiGoggles,
    img: "img/skiGogglesMini.png"
  },
  {
    order: 6,
    nameEn: en.promo.lenses,
    img: "img/lenses.png",
  },
  {
    order: 7,
    nameEn: en.promo.accesories,
    img: "img/accesories.png"
  }
];

export default promoGlasses;