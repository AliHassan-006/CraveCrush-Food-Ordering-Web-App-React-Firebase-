import React, { Fragment } from "react";
import classes from "./Header.module.css";
import Tablefood from '../../assets/Table-Food.avif'
import HeaderCardButton from './HeaderCartButton'
const Header =(props)=>{
    return(
<Fragment>
      <header className={classes.header}>
        <h1>CraveCrush</h1>
        <nav className={classes.navbar}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Tablefood} alt="A table full of delicious food." />
      </div>
    </Fragment>
  
);

};
export default Header;