import { promoGlasses } from "@/static";
import classes from "./style.module.scss";

const PromoGoods = () => (
  <div className={classes.promo}>
    {promoGlasses.map((item) => (
      <div className={classes.promoItem} key={item.order}>
        <img src={item.img} alt={item.nameEn} />
        <span>{item.nameEn}</span>
      </div>
    ))}
  </div>
);

export default PromoGoods;
