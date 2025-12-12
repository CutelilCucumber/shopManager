import { useParams } from "react-router";
import styles from "../styles.module.css"
import Weapons from "./Weapons";
import Armor from "./Armor";
import Potions from "./Potions";

export default function Shop(){
    const {name} = useParams();

  return (
    <div>
      <ShopsNav />
      <hr />
      <h2>Here are the wares:</h2>
      {name === "weapons" ? (
        <Weapons />
      ) : name === "armor" ? (
        <Armor />
      ) : name === "potions" ? (
        <Potions />
      ) : (
        <Default />
      )}
    </div>
  );
};

function Default(){
    return <p>Select a Shop!</p>
}

function ShopsNav(){
    return (
        <nav className={styles.ShopsNav}>
            <h1>shoppies</h1>
        </nav>
    )
}