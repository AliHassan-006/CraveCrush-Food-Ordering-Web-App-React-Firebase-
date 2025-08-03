import classes from './Card.module.css'
 const card = props =>{


    return(

     <div className={classes.card}> {props.children} </div> 
    );
 }
 export default card;
