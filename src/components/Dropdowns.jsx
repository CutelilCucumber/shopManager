import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";

export default function DropNav({worldData, addRecentShop, isEditing}){
    const [currCity, setCurrCity] = useState(null)

    return (
        <div className={styles.drops}>
              <h3>Navigation</h3>
              <CityDrop cityList={worldData} setCurrCity={setCurrCity} isEditing={isEditing}/>
              <ShopDrop addRecentShop={addRecentShop} cityName={currCity ? (currCity.name) : (null)}
                shopList={currCity ? (currCity.shopList) : (null)} isEditing={isEditing}/>
            </div>
    )
}

function ShopDrop({cityName, shopList, addRecentShop, isEditing}){
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
                <div>
                    {shopList.map(shop =>
                            <div className={styles.listItem} key={shop.id}>
                                {isEditing ? (
                                    <>
                                        <Link onClick={() => addRecentShop(shop)} className={styles.selectable} replace to={"/shop/"+shop.id}>{shop.name}</Link>
                                        <img src="/assets/buttons/delete.svg"/>
                                    </>
                                ) : (
                                    <Link onClick={() => addRecentShop(shop)} className={styles.selectable} replace to={"/shop/"+shop.id}>{shop.name}</Link>
                                    )}

                            </div>
                        )}
                    {isEditing ? (
                                    <div className={styles.listItem}>
                                        <p>Add Shop</p>
                                        <img src="/assets/buttons/add.svg"/>
                                    </div>
                                ) : ("")}
                </div>
                ) : ("")}
        </div>
    )

}
function CityDrop({cityList, setCurrCity, isEditing}){
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
                <div>
                    {cityList.map(city =>
                            <div className={styles.listItem} key={city.id}>
                                {isEditing ? (
                                    <>
                                        <p className={styles.selectable} onClick={() => setCurrCity(city)}>{city.name}</p>
                                        <img src="/assets/buttons/delete.svg"/>
                                    </>
                                ) : (
                                    <p className={styles.selectable} onClick={() => setCurrCity(city)}>{city.name}</p>
                                )}
                                
                            </div>
                        )}
                        {isEditing ? (
                                    <div className={styles.listItem}>
                                        <p>Add City</p>
                                        <img src="/assets/buttons/add.svg"/>
                                    </div>
                                ) : ("")}
                </div>
                ) : ("")}
        </div>
    )

}