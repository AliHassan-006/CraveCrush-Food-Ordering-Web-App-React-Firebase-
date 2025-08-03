import react,{ useContext,useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/Cart-context";
import CartItem from "../Cart/CartItem";
import Checkout from "../Cart/checkout";
import React from "react";
function Cart(props) {
  const [IsCheckout, setIsCheckout] = useState(false);
  const[isSubmitting,setIsSubmitting]=useState(false);
  const [didSubmit, setDidSubmit] = useState(false);


  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
   const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
    console.log('removed')
   };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
    console.log('added')
  };

const orderHandler=()=>{
  setIsCheckout(true);
}
const submitOrderHandler= async(userData)=>{
  setIsSubmitting(true);
    await fetch('https://movies-http-1b6a5-default-rtdb.firebaseio.com/orders.json',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        },
        body:JSON.stringify({
          user:userData,
          orderedItems:cartCtx.items
     })
     });
     setIsSubmitting(false);
       setDidSubmit(true);
       cartCtx.clearCart();
    }
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, { ...item, amount: 1 })}

        />
      ))}
    </ul>
  );

  const modalActions=<div className={classes.actions}>
        <button className={classes["actions--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={orderHandler}> Order</button>}
      </div>
      const cartModalContent=<React.Fragment>
          {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {IsCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
      {!IsCheckout && modalActions}
      </React.Fragment>
      const isSubmitModalContent=<p>Sending Order Data ...</p>
      const ditSubmitModalContent=<react.Fragment>
        <p>Your Order Is Successfully Submitted!</p>
        <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
        </div>
      </react.Fragment>
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmitModalContent}
      {!isSubmitting && didSubmit && ditSubmitModalContent }
      
      
    </Modal>
  );
}
export default Cart;
