import classes from "./style.module.scss";
import { promoCards } from "@/static";

const promoCardContainer = () => (
  <section className={classes.promoCardContainter}>
    {promoCards.map((item) => (
      <div
        className={classes.promoCard}
        style={{ backgroundImage: `url(${item.backgroundImg})` }}
      >
        <span
          className={
            item.blackTitleAthlete
              ? `${classes.athlete} ${classes.athleteBlackText}`
              : classes.athlete
          }
        >
          {item.athlete}
        </span>
        <img
          className={classes.productImg}
          src={item.productImg}
          alt={item.title}
        />
        <div className={classes.text}>
          <span className={classes.typeProduct}>{item.typeProduct}</span>
          <h2 className={classes.title}>{item.title}</h2>
          <p className={classes.description}>{item.description}</p>
          <span className={classes.price}>{item.price}</span>
        </div>
      </div>
    ))}
  </section>
);

export default promoCardContainer;
