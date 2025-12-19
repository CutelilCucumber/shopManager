import { useOutletContext } from "react-router-dom";
import NavBar from "../components/NavBar"


export default function Cart(){
    const {worldData, setWorldData, cart, setCart} = useOutletContext();

    return (
        <div>
            <h1>Welcome to your Cart</h1>
        <div>This is your cart</div>
        </div>
    )
}