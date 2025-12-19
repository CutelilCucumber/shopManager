import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";

export function ShopDrop({shopList, setSelectedShop}){
    const [isOpen, setIsOpen] = useState(true)

    const toggleDrop = () => {
        setIsOpen(!isOpen)
    }

    if (!shopList || shopList.length===0) return (
        <h4>No shops available!</h4>
    )
    return(
        <div>
            <h4 tabIndex={0} onClick={() => toggleDrop()}>
                Available Shops
                <img src={isOpen ? "/assets/buttons/arrow-up.svg" : "/assets/buttons/arrow-down.svg"} />
            </h4>
            {isOpen ? (
                <ul>
                    {shopList.map(shop =>{
                        return (
                            <li key={shop.id}>
                                <p onClick={() => setSelectedShop(shop)}>{shop.name}</p>
                            </li>
                        )
                    })}
                </ul>
                ) : ("")}
        </div>
    )

}
export function CityDrop({cityList}){
    const [isOpen, setIsOpen] = useState(true)

    const toggleDrop = () => {
        setIsOpen(!isOpen)
    }

    if (!cityList || cityList.length===0) return (
        <h4>There are no cities yet!</h4>
    )
    return(
        <div>
            <h4 tabIndex={0} onClick={() => toggleDrop()}>
                Available Cities
                <img src={isOpen ? "/assets/buttons/arrow-up.svg" : "/assets/buttons/arrow-down.svg"} />
            </h4>
            {isOpen ? (
                <ul>
                    {cityList.map(city =>{
                        const linkAddress = "/shop/"+city.id;
                        return (
                            <li key={city.id}>
                                <Link to={linkAddress}>{city.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                ) : ("")}
        </div>
    )

}