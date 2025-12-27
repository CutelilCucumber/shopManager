import styles from "../styles.module.css";
import { Link } from "react-router-dom";

export default function NavBar({cartQuant}){
    return (
        <nav className={styles.NavBar}>
            <h1>Market Manager</h1>
            <Link replace to="/"><h2>Editor</h2></Link>
            <Link replace to="/shop"><h2>Market</h2></Link>
            <Link className={styles.cart} replace to="/cart">
            <img className={styles.selectable} src="/assets/buttons/shopping-cart.svg" />
            {cartQuant > 0 ? (
                <div className={styles.cartNum}>{cartQuant}</div>
            ) : ("")}</Link>
        </nav>
    )
}