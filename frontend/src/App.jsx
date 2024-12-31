import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [menuIsShown,setMenuIsShown] = useState(false);
  function showCartHandler(){
    setCartIsShown(true);
  }
  function hideCartHandler(){
    setCartIsShown(false);
  }
  function viewMenuHandler(){
    setMenuIsShown(true);
  }
  return(
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} onViewMenu={viewMenuHandler} /> 
      <main>
      {menuIsShown && <Meals/> }
      </main>
    </CartProvider>
  );
}

export default App;
