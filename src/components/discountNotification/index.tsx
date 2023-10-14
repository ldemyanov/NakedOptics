import classes from "./style.module.scss";
import { en } from "../../lang";

const DiscountNotification = () => (
  <div className={classes.topSale}>
    <span>{en.topSale} </span>
  </div>
);

export default DiscountNotification;
