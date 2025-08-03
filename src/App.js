import {Fragment,useState} from 'react';
import Meals from './Components/Meals/Meals';
import Header from './Components/Layout/Header'
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
import Footer from './Components/Layout/Footer';
function App() {

const [cartIsShown,SetCartIsShown]= useState(false);

const cartShowHandler = ()=>{
  SetCartIsShown(true)
};
 const cartHideHandler=()=>{
  SetCartIsShown(false)
 };


  return (
  <CartProvider>
    {cartIsShown && <Cart onClose={cartHideHandler} />}
    <Header onShowCart={cartShowHandler}  />
      <main>
        <Meals/>
      </main>
      <Footer/>
      
    </CartProvider>
 
    
  
 );
}

export default App;
