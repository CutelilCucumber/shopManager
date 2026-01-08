import { useOutletContext } from 'react-router-dom';
import styles from '../styles.module.css'
import NavBar from '../components/NavBar';

export default function Editor() {
const {worldData,
      setWorldData,
      catalogCache, 
      setCatalogCache,
      cart,
      addToCart,
      incrementQuantity,
      recentShops,
      toggleEditing} = useOutletContext();

  return (
    <div className={styles.shopContainer}>
      <h2>Shop Editor!</h2>
      <button onClick={toggleEditing}>click to edit</button>
    </div>
  );
};
