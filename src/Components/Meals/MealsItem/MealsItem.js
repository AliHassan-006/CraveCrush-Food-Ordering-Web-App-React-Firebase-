import React,{useContext} from "react";
import classes from '../MealsItem/MealsItem.module.css'
import MealsitemForm from '../MealsItem/MealsitemForm'
import CartContext from '../../../Store/Cart-context'

const MealsItem = (props) => {
  const cartCtx=useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const onAddToCartHandler=amount=>{
cartCtx.addItem({
  id:props.id,
  name:props.name,
  amount:amount,
  price:props.price
})

  }
  return (
    <li className={classes.meal}>
      <div >
        <h3> {props.name}</h3>
        <div className={classes.description}> {props.description} </div>
        <div className={classes.price}> {price}</div>
      </div>
      <div> <MealsitemForm onAddToCart={onAddToCartHandler}/> </div>
    </li>
  );
};

export default MealsItem;
