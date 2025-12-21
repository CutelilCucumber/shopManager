import { useParams, useOutletContext } from "react-router";
import { useState, useEffect } from 'react'
import { Parchment, Line } from "../components/VisualBlocks";
import NavBar from "../components/NavBar";
import {ShopDrop, CityDrop} from "../components/Dropdowns";
import styles from "../styles.module.css";

export default function Shop(){
    const {worldData,
      setWorldData,
      catalogCache, 
      setCatalogCache,
      cart,
      addToCart,
      incrementQuantity} = useOutletContext();
    const {cityId} = useParams();

    const [selectedShop, setSelectedShop] = useState(null);
    const [displayItem, setDisplayItem] = useState(null);

    const changeShop = (shop) => {
      setSelectedShop(shop);
      setDisplayItem(null);
    }

    const currCity = cityId ? worldData.find(city => city.id === cityId) : null;
    const cached = selectedShop ? catalogCache[selectedShop.id] : null;
    useEffect(() => {
      if (!selectedShop || cached) return;

      async function fetchCatalog() {
        const results = await Promise.all(selectedShop.goods
          .map(item =>fetch("https://www.dnd5eapi.co"+item)
          .then(result => result.json())
        )
      )

      setCatalogCache(prev => ({
        ...prev,
          [selectedShop.id]: {
          items: results.flat(),
          fetchedAt: Date.now()
        }
      }))
    }
    fetchCatalog();
    }, [selectedShop, cached, setCatalogCache] )

  return (
    <div className={styles.shopContainer}>
      <div className={styles.drops}>
        <CityDrop cityList={worldData}/>
        <ShopDrop cityName={currCity ? (currCity.name) : (null)}
          shopList={currCity ? (currCity.shopList) : (null)} 
          changeShop={changeShop}/>
      </div>
      {selectedShop && cached ? (
        <>
          <Parchment>
            <h2>{selectedShop.name}</h2>
            <h3>Shopkeeper: {selectedShop.shopKeeper}</h3>
            <Catalog itemList={cached.items} setDisplayItem={setDisplayItem} addToCart={addToCart}/>
          </Parchment>
          {displayItem ? (<Display displayItem={displayItem}/>) : ("")}
        </>
      ) : (
        <Default />
      )}
    </div>
  );
};

function Catalog({itemList, setDisplayItem, addToCart}){



  return (
    <>
    <Line size="greater"/>
    <ul>
    {itemList.map(item => {
      return (
        <div className={styles.itemEntry} onClick={() => setDisplayItem(item)} key={item.name}>
          <li>{item.name}</li>
          {item.cost !== undefined ? (<p>{item.cost.quantity}{item.cost.unit}</p>) : (<p>No Pricetag</p>)}
          <img src="/assets/buttons/add.svg" onClick={() => addToCart(item)}/>
        </div>
      )
    })}
    </ul>
    </>
  )
}

function Display({displayItem}){

  return (
    <div className={styles.itemCard}>
      <h3>{displayItem.name}</h3>
      <h4>{displayItem.equipment_category.name}</h4>
      {displayItem.image !== undefined ? (<img src={"https://www.dnd5eapi.co"+displayItem.image} />) : ("")}
      {displayItem.desc !== undefined ? (<p>{displayItem.desc}</p>) : ("")}
      {displayItem.range !== undefined ? (<p>Range: {displayItem.range.normal} ft</p>) : ("")}
      {displayItem.damage !== undefined ? (<p>Damage: {displayItem.damage.damage_dice} {displayItem.damage.damage_type.name}</p>) : ("")}
      {displayItem.armor_class !== undefined ? (<p>AC: {displayItem.armor_class.base} Dex bonus: {displayItem.armor_class.dex_bonus}</p>) : ("")}

      {displayItem.weight !== undefined ? (<p>Weight: {displayItem.weight} lbs</p>) : (<p>Weight: negligible</p>)}


    </div>
  )
}

function Default(){
    return <p>Select a shop to spend that hard earned gold!</p>
}