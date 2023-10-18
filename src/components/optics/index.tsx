import { en } from "@/lang";
import classes from "./style.module.scss";
import { promoGlasses } from "@/static";
import sportGlasses from "@/static/sportGlasses";
import { Category } from "@/static/promoGlasses";

const Optics = () => (
  <div className={classes.optics}>
    <div className={classes.opticsWrapper}>
      {categoryOptics('GLASSES')}
      {categoryOptics('GOGGLES')}
      {categoryOptics('OTHERS')}
    </div>
    <div>
      <h2 className={classes.opticsTitle}>{en.optSportGlasses}</h2>
      <a href="#" className={classes.opticsLabel}>{en.optLabel}</a>
      <div className={classes.opticsMain}>
          {cardsOptics(true)}
        <div className={classes.opticsInner}>
          {cardsOptics(false)}
        </div>
      </div>
    </div>
  </div>
)

const categoryOptics = (category: string) => {
  return (
    <div className={classes.opticsBox}>
      <h3 className={classes.opticsSubTitle}>{en[`opt${category}`]}</h3>
      {promoGlasses.filter((item) => item.category === Category[category]).map((item, i) => (
        <button className={classes.opticsActive} key={i}>
          <div className={classes.opticsCategory}>
            <img src={item.img} alt={item.nameEn} />
            <span>{item.nameEn}</span>
          </div>
        </button>
      ))}
    </div>
  )
}

const cardsOptics = (cardIsBig: boolean) => {
  return (
    sportGlasses.filter((item) => cardIsBig ? item.txt : !item.txt).map((item, i) => (
      <article className={classes.opticsContent} key={i}>
        <img className={cardIsBig ? classes.opticsContentImg : null} src={item.img} alt={item.title} />
        <div className={classes.opticsContentBox}>
          <span className={cardIsBig ? classes.opticsContentName : null}>{item.title}</span>
          <span className={classes.opticsContentColor}>{item.colorsInfo}</span>
          {item.txt ? <span className={classes.opticsContentTxt}>{item.txt}</span> : null}
        </div>
      </article>
    ))
  )
}

export default Optics;