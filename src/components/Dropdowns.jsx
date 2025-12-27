import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";

export default function DropNav({worldData}){
    const [currCity, setCurrCity] = useState(null)

    return (
        <div className={styles.drops}>
              <h3>Navigation</h3>
              <CityDrop cityList={worldData} setCurrCity={setCurrCity}/>
              <ShopDrop cityName={currCity ? (currCity.name) : (null)}
                shopList={currCity ? (currCity.shopList) : (null)}/>
            </div>
    )
}

function ShopDrop({cityName, shopList}){
    const [isOpen, setIsOpen] = useState(true)

    const toggleDrop = () => {
        setIsOpen(!isOpen)
    }

    if (!cityName) return (
        <h4>Please select a city!</h4>
    )
    if (shopList.length===0) return (
        <h4>No shops in {cityName}!</h4>
    )
    return(
        <div>
            <h4 tabIndex={0} className={styles.selectable}
                onClick={() => toggleDrop()}>
                Shops in {cityName}
                <img src={isOpen ? "/assets/buttons/arrow-up.svg" : "/assets/buttons/arrow-down.svg"} />
            </h4>
            {isOpen ? (
                <ul>
                    {shopList.map(shop =>{
                        return (
                            <li key={shop.id}>
                                <Link className={styles.selectable} replace to={"/shop/"+shop.id}>{shop.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                ) : ("")}
        </div>
    )

}
function CityDrop({cityList, setCurrCity}){
    const [isOpen, setIsOpen] = useState(true)

    const toggleDrop = () => {
        setIsOpen(!isOpen)
    }

    if (!cityList || cityList.length===0) return (
        <h4>There are no cities yet!</h4>
    )
    return(
        <div>
            <h4 tabIndex={0} onClick={() => toggleDrop()}
                className={styles.selectable}>
                Available Cities
                <img src={isOpen ? "/assets/buttons/arrow-up.svg" : "/assets/buttons/arrow-down.svg"} />
            </h4>
            {isOpen ? (
                <ul>
                    {cityList.map(city =>{
                        return (
                            <li key={city.id}>
                                <p className={styles.selectable} onClick={() => setCurrCity(city)}>{city.name}</p>
                            </li>
                        )
                    })}
                </ul>
                ) : ("")}
        </div>
    )

}