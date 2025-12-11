import { useParams } from "react-router";
import Weapons from "./Weapons";
import Armor from "./Armor";
import Potions from "./Potions";

export default function Shop(){
    const {name} = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>Profile visited here:</h2>
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