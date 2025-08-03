import { useRef,useState } from 'react';
import classes from './checkout.module.css';

const isEmpty=value=>value.trim()==='';
const isFiveChars=value=>value.trim().length === 5;
const Checkout = (props) => {
   const [formInputValidity,setFormInputValidity]=useState({
    name:true,
    street:true,
    postalCode:true,
    city:true
   }) 

    const inputNameRef=useRef()
    const inputStreetRef=useRef()
    const inputPostalRef=useRef()
    const inputCityRef=useRef()
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName=inputNameRef.current.value;
    const enteredStreet=inputStreetRef.current.value;
    const enteredPostal=inputPostalRef.current.value;
    const enteredCity=inputCityRef.current.value;

    const enteredNameValid=!isEmpty(enteredName);
    const enteredStreetValid=!isEmpty(enteredStreet);    
    const enteredCityValid=!isEmpty(enteredCity);   
    const enteredPostalValid=isFiveChars(enteredPostal) 
    setFormInputValidity({
        name:enteredNameValid,
        street:enteredStreetValid,
        postalCode:enteredPostalValid,
        city:enteredCityValid
    })
    const formValid=enteredNameValid && enteredStreetValid && enteredCityValid && enteredPostalValid;
    if(!formValid){
        return; 
    }
    props.onConfirm({
        name:enteredName,
        street:enteredStreet,
        postalCode:enteredPostal,
        city:enteredCity
    });


  };
  const nameControlClasses=`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
  const streetControlClasses=`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
  const postalControlClasses=`${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`
  const cityControlClasses=`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={inputNameRef}/>
        {!formInputValidity.name && <p>Please Enter a Valid Name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={inputStreetRef} />
        {!formInputValidity.street && <p>Please Enter a Valid Street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={inputPostalRef} />
        {!formInputValidity.postalCode && <p>Please Enter a Valid Postal Code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city' >City</label>
        <input type='text' id='city' ref={inputCityRef} />
        {!formInputValidity.city && <p>Please Enter a Valid City!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;