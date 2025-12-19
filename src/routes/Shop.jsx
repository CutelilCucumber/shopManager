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
      setCart} = useOutletContext();
    const {cityId} = useParams();

    const [selectedShop, setSelectedShop] = useState(null);
    const {displayItem, setDisplayItem} = useState(null);

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

    console.log(cached)
  return (
    <div>
      <CityDrop cityList={worldData}/>
      <ShopDrop shopList={currCity ? (currCity.shopList) : (null)} setSelectedShop={setSelectedShop}/>
      {selectedShop && cached ? (
        <>
          <Parchment>
            <Catalog itemList={cached.items} setDisplayItem={setDisplayItem}/>
          </Parchment>
        </>
      ) : (
        <Default />
      )}
    </div>
  );
};

function Catalog({itemList, setDisplayItem}){



  return (
    <ul>
    {itemList.map(item => {
      return (
        <p key={item.name}>{item.name}</p>
      )
    })}
    </ul>
  )
}

// function Display({displayItem='default'}){
  
// }

function Default(){
    return <p>Select a shop!</p>
}