import { Link } from 'react-router-dom';
import './App.css'

export default function App() {
  return (
    <div>
      <h1>Hello from the Bazaar!</h1>
      <p>Here are some directions</p>
      <nav>
        <ul>
          <li>
            <Link to="shop">shop page</Link>
          </li>
          <li>
            <Link to="cart">cart page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
