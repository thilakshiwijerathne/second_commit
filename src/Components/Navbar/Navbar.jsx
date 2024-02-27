import React, { useState } from 'react';
import './Navbar.css';
import Cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>Bliss</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link to='/'>Shop</Link>{menu === "shop" ? <hover /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link to='/Men'>Men</Link>{menu === "Men" ? <hover /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link to='/Women'>Women</Link>{menu === "Women" ? <hover /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link to='/Kids'>Kids</Link>{menu === "Kids" ? <hover /> : <></>}
        </li>
      </ul>
      <div className="login">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img className='imgcart' src={Cart} alt="" /></Link>
        <div className='navbar-count'>0</div>
      </div>
    </div>
  );
}

export default Navbar;
