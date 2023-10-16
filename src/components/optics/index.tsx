import { en } from "@/lang";
import classes from "./style.module.scss";
import { promoGlasses } from "@/static";
import sportGlasses from "@/static/sportGlasses";
import { Category } from "@/static/promoGlasses";

const Optics = () => (
  <div className={classes.optics}>
    <div className={classes.opticsMainWrapper}>
      <div>
        <h3>{en.optGlasses}</h3>
        {promoGlasses.filter((item) => item.category === Category.GLASSES).map((item, i) => (
          <div className={classes.opticsCategory} key={i}>
            <img src={item.img} alt={item.nameEn} />
            <span>{item.nameEn}</span>
          </div>
        ))}
      </div>
      <div>
        <h3>{en.optGoggles}</h3>
        {promoGlasses.filter((item) => item.category === Category.GOGGLES).map((item, i) => (
          <div className={classes.opticsCategory} key={i}>
            <img src={item.img} alt={item.nameEn} />
            <span>{item.nameEn}</span>
          </div>
        ))}
      </div>
      <div>
        <h3>{en.optOthers}</h3>
        {promoGlasses.filter((item) => item.category === Category.OTHERS).map((item, i) => (
          <div className={classes.opticsCategory} key={i}>
            <img src={item.img} alt={item.nameEn} />
            <span>{item.nameEn}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h2 className={classes.opticsTitle}>{en.optSportGlasses}</h2>
      <span className={classes.opticsLabel}>{en.optLabel}</span>
      <div className={classes.opticsMain}>
          <div className={classes.opticsBigBox}>
                <img src="img/sportBigRushHalfFrame.png" alt="" />
                <span className={classes.opticsBoxTitle}>Rush Half Frame</span>
                <span className={classes.opticsBoxColor}>3 COLORS</span>
                <p className={classes.opticsBoxInfo}>Adjustable nose mount, protection: UV400, unique size</p>
          </div>
          <div className={classes.opticsWrapper}>
            {sportGlasses.map((item) => (
              <div className={classes.opticsBox}>
                <img src={item.img} alt="" />
                <span className={classes.opticsBoxTitle}>{item.title}</span>
                <span className={classes.opticsBoxColor}>{item.colorsInfo}</span>
              </div>
            ))}
          </div>
      </div>
    </div>
  </div>
)

export default Optics;