import React from 'react'
import './Cart.css'
const Cart = () => {
  return (
<div className="cart-body">
  <div className="left-container">
    <h3 style={{marginTop: 30, marginBottom: 15}}>Cart | 3Items</h3>
    <div className="section">
      <div className="section1">
        <div className="cont1">
          <img src="https://images.meesho.com/images/products/249677977/sj2qk_512.jpg" alt />
          <div className="info">
            <h4 style={{marginBottom: 8, wordSpacing: 2}}>100% Bio Wash Cotton T-Shirt</h4>
            <p style={{fontSize: 15, marginBottom: 8}}>Size:L&nbsp;&nbsp;&nbsp; Qty:1</p>
            <p style={{fontSize: 15, marginBottom: 20}}>Rs.265</p>
            <p>
              <i className="fa-solid fa-xmark fa-sm" />
              <span style={{fontSize: 15}}><b>REMOVE</b></span>
            </p>
          </div>
        </div>
        <h3 style={{fontSize: 14, color: 'rgb(159, 32, 137)'}}>EDIT</h3>
      </div>
      <div className="section2">
        <p>Sold by : Cottrees</p>
        <p>FREE DELIVERY</p>
      </div>
    </div>
    <div className="section">
      <div className="section1">
        <div className="cont1">
          <img src="https://images.meesho.com/images/products/222479409/oblcn_512.jpg" alt />
          <div className="info">
            <h4 style={{marginBottom: 8, wordSpacing: 2}}>Mens Formal Shirt</h4>
            <p style={{fontSize: 15, marginBottom: 8}}>Size:L&nbsp;&nbsp;&nbsp; Qty:1</p>
            <p style={{fontSize: 15, marginBottom: 20}}>Rs.999</p>
            <p>
              <i className="fa-solid fa-xmark fa-sm" />
              <span style={{fontSize: 15}}><b>REMOVE</b></span>
            </p>
          </div>
        </div>
        <h3 style={{fontSize: 14, color: 'rgb(159, 32, 137)'}}>EDIT</h3>
      </div>
      <div className="section2">
        <p>Sold by : VIVESCO</p>
        <p>FREE DELIVERY</p>
      </div>
    </div>
    <div className="section">
      <div className="section1">
        <div className="cont1">
          <img src="https://images.meesho.com/images/products/249677977/sj2qk_512.jpg" alt />
          <div className="info">
            <h4 style={{marginBottom: 8, wordSpacing: 2}}>Casual Shirt</h4>
            <p style={{fontSize: 15, marginBottom: 8}}>Size:L&nbsp;&nbsp;&nbsp; Qty:1</p>
            <p style={{fontSize: 15, marginBottom: 20}}>Rs.749</p>
            <p>
              <i className="fa-solid fa-xmark fa-sm" />
              <span style={{fontSize: 15}}><b>REMOVE</b></span>
            </p>
          </div>
        </div>
        <h3 style={{fontSize: 14, color: 'rgb(159, 32, 137)'}}>EDIT</h3>
      </div>
      <div className="section2">
        <p>Sold by : TOP 10 Garment</p>
        <p>FREE DELIVERY</p>
      </div>
    </div>
  </div>
  <div className="right-container">
    <h4 style={{marginBottom: 20}}>PRICE DETAILS</h4>
    <div className="price">
      <p>Total Product Price</p>
      <p>Rs.1898</p>
    </div>
    <div className="price1">
      <p>Order Total</p>
      <p>Rs.1898</p>
    </div>
    <div className="para">
      Clicking on 'Continue' will not deduct any Money
    </div>
    <button className="button">
      Continue
    </button>
    <img src="https://images.meesho.com/images/marketing/1588578650850.png" alt style={{width: '100%', height: 135}} />
  </div>
</div>

  )
}

export default Cart
