import { Outlet } from "react-router-dom";
import { defaultTowns } from './data/data';
import { useState } from "react";
import NavBar from "./components/NavBar";
import DropNav from "./components/Dropdowns";
import styles from "./styles.module.css";

export default function RootLayout() {
  const [worldData, setWorldData] = useState(defaultTowns);
  const [catalogCache, setCatalogCache] = useState({});

  const [isEditing, setIsEditing] = useState(false);


  const [cart, setCart] = useState([]);
  const [recentShops, setRecentShops] = useState([]);

  const toggleEditing = () => {
    setIsEditing(!isEditing)
  }

  const addRecentShop = (newShop) => {
    let tempShops = structuredClone(recentShops)
    let shopIndex = tempShops.findIndex(shop => shop.id === newShop.id);
    if (shopIndex !== -1){
      tempShops.splice(shopIndex, 1)
    }
    tempShops.unshift(newShop)
    setRecentShops(tempShops)
  }

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
      <NavBar cartQuant={getCartQuant(cart)}/>
      <div className={styles.content}>
        <DropNav worldData={worldData} addRecentShop={addRecentShop} isEditing={isEditing}/>
        <Outlet context={{
          worldData,
          setWorldData,
          catalogCache, 
          setCatalogCache,
          cart,
          addToCart,
          incrementQuantity,
          decrementQuantity,
          removeFromCart,
          recentShops,
          toggleEditing
        }} />
      </div>
    </>
  );
}

function getCartQuant(cart){
let total = 0
  for(let i = 0; i < cart.length; i++){
    total += cart[i].quantity;
  }
return total;
}