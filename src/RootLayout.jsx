import { Outlet } from "react-router-dom";
import { defaultTowns } from './data/data';
import { useState } from "react";
import NavBar from "./components/NavBar";
import DropNav from "./components/Dropdowns";
import styles from "./styles.module.css";

export default function RootLayout() {
  const [worldData, setWorldData] = useState(defaultTowns);
  const [catalogCache, setCatalogCache] = useState({});

  const [cart, setCart] = useState([]);
  

  const addToCart = (item) => {
    if (incrementQuantity(item.name)) return;

    setCart(prev => ([
        ...prev,
        {
          name: item.name,
          price: item.cost !== undefined ? (item.cost.quantity) : (0),
          priceUnit: item.cost !== undefined ? (item.cost.unit) : ("temp undefined"),
          quantity: 1,
        }
      ]))
  }

  const incrementQuantity = (itemName) => {
    const tempCart = structuredClone(cart);
    const foundItem = tempCart.find(entry => entry.name === itemName);
    if(foundItem){
      foundItem.quantity = foundItem.quantity+1;
      setCart(tempCart);
      return true;
    }
    return false
  }

  const decrementQuantity = (itemName) => {
    const tempCart = structuredClone(cart);
    const foundItem = tempCart.find(entry => entry.name === itemName);
    if(foundItem){
      if(foundItem.quantity > 0){
        foundItem.quantity = foundItem.quantity-1;
        setCart(tempCart);
      }
    }
  }

  const removeFromCart = (itemName) => {
    setCart(cart.filter(item => item.name !== itemName))
  }

  return (
    <>
      <NavBar cartQuant={cart.length}/>
      <div className={styles.content}>
        <DropNav worldData={worldData}/>
        <Outlet context={{
          worldData,
          setWorldData,
          catalogCache, 
          setCatalogCache,
          cart,
          addToCart,
          incrementQuantity,
          decrementQuantity,
          removeFromCart
        }} />
      </div>
    </>
  );
}