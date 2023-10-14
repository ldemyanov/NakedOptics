import { en } from "@/lang";
import classes from "./style.module.scss";
import AngleRightBSvg from "@assets/svg/angleRightB.svg?react";
import { bigPromoInfo } from "@/static";

const BigPromo = () => (
  <div
    className={classes.bigPromo}
    style={{ background: `url(${bigPromoInfo.img})` }}
  >
    <div className={classes.promoContent}>
      <div className={classes.promoInfo}>
        <span className={classes.promoLabel}>{bigPromoInfo.label}</span>
        <h2 className={classes.promoTitle}>{bigPromoInfo.title}</h2>
        <p className={classes.promoSubTitle}>{bigPromoInfo.subTitle}</p>
        <span className={classes.promoPrice}>{bigPromoInfo.price}</span>
        <button className={classes.promoButton}>
          <span>{en.buyButton}</span>
          <span>
            <AngleRightBSvg />
          </span>
        </button>
      </div>
      <div className={classes.promoController}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export default BigPromo;
