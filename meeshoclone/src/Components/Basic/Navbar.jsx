import React from 'react'
import './Home.css'
import logo from './../../Images/messho-logo.png'
const Navbar = () => {
  return (
<header>
  <nav>
    <div style={{borderBottom: '1px solid grey'}}>
      <div className="top1">
        <div className="top1-left">
          <a href="Home.html">
            <img src={logo} alt="" />
          </a>
          <i className="fa-solid fa-magnifying-glass fa-lg" />
          <input type="search" placeholder="Try Saree, Kurti or Search by Product Code" />
        </div>
        <div className="top1-right">
          <p style={{paddingRight: 20}}>
            <i className="fa-solid fa-mobile-screen-button fa-lg" style={{marginRight: 10}} />Download App</p>
          <div className="br" />
          <p style={{paddingRight: 20}}>Become a supplier</p>
          <div className="br" />
          <div className="profile">
            <a href="login.html"><i style={{marginLeft: 14}} className="fa-regular fa-user" /></a>
            <p>Profile</p>
          </div>
          <div className="profile">
            <a href="Wishlist.html"><i style={{marginLeft: 14}} className="fa-regular fa-heart" /></a>
            <p>Wishlist</p>
          </div>
          <div className="profile">
            <a href="kart.html"><i style={{marginLeft: 5}} className="fa-solid fa-cart-shopping" /></a> 
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
    <div style={{borderBottom: '1px solid grey'}}>
      <div className="top2">
        <ul className="top2-menu">
          <li><a href="product1.html">Men</a></li>
          <li><a href="product2.html">Women</a></li>
          <li><a href="product3.html">Kids</a></li>
          <li><a href="product4.html">Home Appliances</a></li>
          <li><a href="product5.html">Beauty Products</a></li>
          <li><a href="product6.html">Ethinic Wears</a></li>
          <li><a href="product7.html">Jewellery &amp; Accesories</a></li>
          <li><a href="product8.html">Bag &amp; Footwear</a></li>
          <li><a href="product9.html">Electronics</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  )
}

export default Navbar
