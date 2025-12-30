import { useOutletContext } from "react-router-dom";
import { Parchment, Line } from "../components/VisualBlocks";
import NavBar from "../components/NavBar"
import styles from "../styles.module.css";


export default function Cart(){
    const {worldData, setWorldData, cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart} = useOutletContext();

    return (
        <div className={styles.shopContainer}>
            {cart.length === 0 ? (<h2>Your cart is empty. Start shopping!</h2>) : (
                <Parchment >
                    <h2>Your cart:</h2>
                    {cart.map(item => {
                       return (
                         <div className={styles.itemEntry} key={item.name}>
                           <p>{item.name}</p>
                           <p className={styles.price}>{item.price*item.quantity} {item.priceUnit}</p>
                            <img className={styles.selectable} src="/assets/buttons/arrow-down.svg" onClick={() => decrementQuantity(item.name)}/>
                           <p>{item.quantity}</p>
                           <img className={styles.selectable} src="/assets/buttons/arrow-up.svg" onClick={() => incrementQuantity(item.name)}/>
                            <img className={styles.selectable} src="/assets/buttons/delete.svg" onClick={() => removeFromCart(item.name)}/>
                         </div>
                       )
                     })}
                </Parchment>
            )}
        </div>
    )
}