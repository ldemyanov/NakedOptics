import classes from "./style.module.scss";
import NakesOpticsSvg from "@assets/svg/nakesOptics.svg?react";
import UserCircleSvg from "@assets/svg/userCircle.svg?react";
import ShoppingBagSvg from "@assets/svg/shoppingBag.svg?react";
import SearchSvg from "@assets/svg/search.svg?react";
import { en } from "@lang/index";

const HeaderMenu = () => (
  <menu className={classes.menu}>
    <NakesOpticsSvg />
    <ul className={classes.menuList}>
      <li>{en.menu.optics}</li>
      <li>{en.menu.clothing}</li>
      <li className={classes.menuItemActive}>{en.menu.outlet}</li>
      <li>{en.menu.nakedHeroes}</li>
      <li>{en.menu.stories}</li>
    </ul>
    <ul className={classes.iconsList}>
      <li>
        <SearchSvg />
      </li>
      <li>
        <UserCircleSvg />
      </li>
      <li>
        <ShoppingBagSvg />
      </li>
    </ul>
  </menu>
);

export default HeaderMenu;
