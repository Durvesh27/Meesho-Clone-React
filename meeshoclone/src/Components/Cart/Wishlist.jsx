import React from 'react'
import './Cart.css'
const Wishlist = () => {
  return (
<div className="wishlist">
  <p className="first"><b>My Wishlist</b> 3 items</p>
  <div className="wishlist-items">
    <div className="wishlist-item">
      <img src="https://images.meesho.com/images/products/116954068/xhph2_400.webp" alt />
      <div className="item-name">Comfy Modern Men T-Shirt</div>
      <div className="secText">
        <strong>Rs.749 </strong>
        <span>Rs.
          <del>₹1299</del>
        </span>
        <b>(69% OFF)</b>
      </div>
      <p className="last-box">MOVE TO CART</p>
      <div className="cancel">
        <i className="fa-solid fa-xmark" style={{paddingTop: 4}} />
      </div>
    </div>
    <div className="wishlist-item">
      <img src="https://images.meesho.com/images/products/132352854/aybya_400.webp" alt />
      <p className="item-name">Preety Fashionta Shirt</p>
      <div className="secText">
        <strong>Rs.1,749 </strong>
        <span>Rs.
          <del>₹3499</del>
        </span>
        <b>(50% OFF)</b>
      </div>
      <p className="last-box">MOVE TO CART</p>
      <div className="cancel">
        <i className="fa-solid fa-xmark" style={{paddingTop: 4}} />
      </div>
    </div>
    <div className="wishlist-item">
      <img src="https://images.meesho.com/images/products/214322852/r9iid_400.webp" alt />
      <p className="item-name">Classic Designer look Shirt</p>
      <div className="secText">
        <strong>Rs.318 </strong>
        <span>Rs.
          <del>₹1099</del>
        </span>
        <b>(71% OFF)</b>
      </div>
      <p className="last-box">MOVE TO CART</p>
      <div className="cancel">
        <i className="fa-solid fa-xmark" style={{paddingTop: 4}} />
      </div>
    </div>
  </div>
</div>

  )
}

export default Wishlist
