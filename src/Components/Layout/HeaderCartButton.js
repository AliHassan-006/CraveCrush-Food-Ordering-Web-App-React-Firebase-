import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../Store/Cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, SetBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(cartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClass = ` ${classes.button}  ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
      if (items.length === 0) {
        return;
      }
      SetBtnIsHighlighted(true);
      const timer = setTimeout(() => {
        SetBtnIsHighlighted(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    },
    [items]);
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        {" "}
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
