import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import './Cart.css'
const Cart = () => {
  const [cart, setCart] = useState();
  const [final, setFinal] = useState(0);

  const users = JSON.parse(localStorage.getItem("Users"));
  const current = JSON.parse(localStorage.getItem("Current-User"));

  useEffect(() => {
    users.forEach((element) => {
      if (element.email === current.email){
        setCart(element.cart);
      }
    });
  }, []);

  useEffect(() => {
    if (cart?.length >= 0) {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item?.price1;
      });
      setFinal(totalPrice);
    }
  }, [cart]);

  function delItem(itemId) {
    let updatedItems = cart.filter((ele) => {
      return ele.id !== itemId;
    });
    users.forEach((data) => {
      if (data.email === current.email) {
        data.cart = updatedItems;
      }
    });
    toast("Item deleted")
    localStorage.setItem("Users",JSON.stringify(users))
    setCart(updatedItems);
  }

  function clearAll() {
    users.forEach((data) => {
      if (data.email === current.email) {
        data.cart = [];
      }
    });
    toast.success("Proceed to Checkout")
    localStorage.setItem("Users",JSON.stringify(users))
    setCart([])
  }
 console.log(cart)
  return (
<div className="cart-body">
  <div className="left-container">
    <h3 style={{marginTop: 30, marginBottom: 15}}>Cart | {cart?.length}Items</h3>
    <div>
    {
      cart?.map((item)=>(
    <div className="section" key={item?.id}>
      <div className="section1">
        <div className="cont1">
          <img src={item?.imgsrc} alt="" />
          <div className="info">
            <h4 style={{marginBottom: "8px", wordSpacing:"2px"}}>{item?.sec}</h4>
            <p style={{fontSize: "15px", marginBottom:" 8px"}}>Size:L&nbsp;&nbsp;&nbsp; Qty:1</p>
            <p style={{fontSize: "15px", marginBottom: "20px"}}>Rs.{item?.price1}</p>
            <p>
              <i className="fa-solid fa-xmark fa-sm" />
              <span style={{fontSize: "14px",marginLeft:"5px"}}><b onClick={()=>delItem(item?.id)}>REMOVE</b></span>
            </p>
          </div>
        </div>
      </div>
      <div className="section2">
        <p>Sold by : Cottrees</p>
        <p>FREE DELIVERY</p>
      </div>
    </div>
          ))
        }
    </div>
  </div>
  <div className="right-container">
    <h4 style={{marginBottom: 20}}>PRICE DETAILS</h4>
    <div className="price">
      <p>Total Product Price</p>
      <p>Rs.{final}</p>
    </div>
    <div className="price1">
      <p>Order Total</p>
      <p>Rs.{final}</p>
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
