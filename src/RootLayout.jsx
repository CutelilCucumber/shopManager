import { Outlet } from "react-router-dom";
import { defaultTowns } from './data/data';
import { useState } from "react";
import NavBar from "./components/NavBar";

export default function RootLayout() {
  const [worldData, setWorldData] = useState(defaultTowns);
  const [catalogCache, setCatalogCache] = useState({});

  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Market Manager</h1>
      <NavBar />

      <Outlet context={{
        worldData,
        setWorldData,
        catalogCache, 
        setCatalogCache,
        cart,
        setCart
      }} />
    </>
  );
}