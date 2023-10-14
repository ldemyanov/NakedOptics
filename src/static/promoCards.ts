type promoCard = {
  order: number,
  athlete: string,
  backgroundImg: string,
  productImg: string,
  typeProduct: string,
  title: string,
  blackTitleAthlete?: boolean; 
  description: string,
  price: string,
};

const promoCards: promoCard[] = [
  {
    order: 1,
    athlete: "Stefan Muller",
    backgroundImg: "img/stefanMullerBackground.png",
    productImg: "img/theFalconGlasses.png",
    typeProduct: "Bike glasses",
    title: "The Falcon",
    description: "Resistant and flexible TR-90 Frame, adjustable sylicon nose pads, interchangeble lenses 5+different lenses",
    price: "74,99 €",
  },
  {
    order: 2,
    athlete: "Chloe Kellerman",
    backgroundImg: "img/ChloeKellermanBackground.png",
    productImg: "img/forceEvo.png",
    typeProduct: "SNOW GOGGLES",
    title: "FORCE EVO",
    blackTitleAthlete: true,
    description: "Resistant and flexible TR-90 Frame, adjustable sylicon nose pads, interchangeble lenses 5+different lenses",
    price: "74,99 €",
  },
  {
    order: 3,
    athlete: "Adrien brodley",
    backgroundImg: "img/andrianBrodleyBackground.png",
    productImg: "img/theLine.png",
    typeProduct: "Bike glasses",
    title: "The Line",
    description: "Resistant and flexible TR-90 Frame, adjustable sylicon nose pads, interchangeble lenses 5+different lenses",
    price: "74,99 €",
  }
];

export default promoCards;
