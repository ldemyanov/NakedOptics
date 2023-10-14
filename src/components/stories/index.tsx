import { en } from "@/lang";
import classes from "./style.module.scss";
import AngleRightBSvg from "@assets/svg/angleRightB.svg?react";
import storiesCards from "@/static/storiesCards";
import storiesMiniCards from "@/static/sroriesMiniCards";

const Stories = () => (
  <>
    <div className={classes.container}>
      <div className={classes.head}>
        <h2 className={classes.title}>{en.stories}</h2>
        <a className={classes.link} href="#">
          {en.discoverStories}
          <AngleRightBSvg />
        </a>
      </div>
      <div className={classes.cardContainer}>
        {storiesCards.map((card, index) => (
          <div className={classes.card} key={index}>
            <img className={classes.cardImg} src={card.img} alt="story img" />
            <p className={classes.cardText}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
    <div className={classes.promoBlock}>
      <p>{en.solutionForEveryone}</p>
    </div>
    <div className={classes.miniCardsContainer}>
        {storiesMiniCards.map((card, index) => (
          <div className={classes.miniCard} key={index}>
            <img className={classes.miniCardImg} src={card.img} alt="story img" />
            <h3 className={classes.miniCardSport}>{card.sport}</h3>
            <p className={classes.miniCardText}>{card.text}</p>
          </div>
        ))}
    </div>
  </>
);

export default Stories;
