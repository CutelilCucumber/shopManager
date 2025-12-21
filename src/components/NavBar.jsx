import styles from "../styles.module.css";
import { Link } from "react-router-dom";

export default function NavBar({cartQuant}){
    return (
        <nav className={styles.NavBar}>
            <Link replace to="/"><h2>Editor</h2></Link>
            <Link replace to="/shop"><h2>Market</h2></Link>
            <Link replace to="/cart"><h2><img src="/assets/buttons/shopping-cart.svg" />{cartQuant > 0 ? (<div className={styles.cartNum}>{cartQuant}</div>) : ("")}</h2></Link>
        </nav>
    )
}