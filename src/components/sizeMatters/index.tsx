import { en } from "@/lang";
import classes from "./style.module.scss";

const SizeMatters = () => (
  <section className={classes.sizeMattersContaner}>
    <div className={classes.sizeMatters}>
      <div className={classes.sizeMattersContent}>
        <span className={classes.sizeMattersBrand}>{en.bsmBrand}</span>
        <h2 className={classes.sizeMattersTitle}>{en.bsmTitle}</h2>
        <p className={classes.sizeMattersDescription}>{en.bsmDescription}</p>
        <div className={classes.sizeMattersSelectList}>
          <div className={classes.sizeMattersSelectBlock}>
            <span>{en.bsmSizeL}</span>
            <select>
              <option>SHOP FALCON</option>
            </select>
          </div>
          <div className={classes.sizeMattersSelectBlock}>
            <span>{en.bsmSizeS}</span>
            <select>
              <option>SHOP HAWK</option>
            </select>
          </div>
        </div>
      </div>
      <div className={classes.sizeMattersImgContainer}>
        <img
          className={classes.sizeMattersImg1}
          src="img/sizeMattersDecor1.png"
          alt=""
        />
        <img
          className={classes.sizeMattersImg2}
          src="img/sizeMattersDecor2.png"
          alt=""
        />
      </div>
    </div>
  </section>
);

export default SizeMatters;
