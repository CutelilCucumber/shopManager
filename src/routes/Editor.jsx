import { Link, useOutletContext } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function Editor() {
const {worldData, setWorldData, cart, setCart} = useOutletContext();

  return (
    <div>
      <h1>Shop Editor!</h1>
      <p>Town Selected: </p>
        <ul>
          <li>
            <Link to="/shop">shop page</Link>
          </li>
          <li>
            <Link to="/cart">cart page</Link>
          </li>
        </ul>
    </div>
  );
};
