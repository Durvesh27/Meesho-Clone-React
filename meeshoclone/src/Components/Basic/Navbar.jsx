import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import logo from "./../../Images/messho-logo.png";
import { useNavigate } from "react-router-dom";
import AddProduct from "../Seller/AddProduct";
import { AuthContext } from "../../Context";
import Profile from "./Profile";
const Navbar = ({ proCount, setProCount }) => {
  const router = useNavigate();
  const { state, login, logout } = useContext(AuthContext);
  const [logged, setLogged] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [profile, setProfile] = useState(false);
  const[showProfile,setShowProfile]=useState(false)
  useEffect(() => {
    if (state?.user) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [state]);
function loginClick(){
 setProfile(!profile)
  router('/login')
}
  return (
    <header>
      <nav>
        <div style={{ borderBottom: "1px solid grey" }}>
          <div className="top1">
            <div className="top1-left">
              <img src={logo} alt="" onClick={() => router("/")} />
              <i className="fa-solid fa-magnifying-glass fa-lg" />
              <input
                type="search"
                placeholder="Try Saree, Kurti or Search by Product Code"
              />
            </div>
            <div className="top1-right">
              <p style={{ paddingRight: "20px" }}>
                <i
                  className="fa-solid fa-mobile-screen-button fa-lg"
                  style={{ marginRight: 10 }}
                />
                Download App
              </p>
              <div className="br" />
              {state?.user?.role == "Seller" ? (
                <p
                  style={{ paddingRight: "20px" }}
                  onClick={() => setShowAdd(!showAdd)}
                >
                  Add Products
                </p>
              ) : (
                <div
                  style={{ paddingRight: "20px" }}
                  onClick={() => setShowAdd(!showAdd)}
                >
                  Become a Seller
                </div>
              )}
              <div className="br" />

              <div
                className="profile"
                onMouseOver={() => setProfile(true)}
                onMouseLeave={() => setProfile(false)}
              >
                <i style={{ marginLeft: 14 }} className="fa-regular fa-user" />
                <p>Profile</p>
                {profile && (
                  <div className="profile-box">
                    {logged ? (
                      <>
                        <h4 style={{ fontWeight: 600 }}>
                          Hello! {state?.user?.name} 
                        </h4>
                        <p className="profile-box-title">
                          {state?.user?.email}
                        </p>
                        <p style={{ color: "purple", fontSize: "13.5px",textDecoration:"underline" }} onClick={()=>setShowProfile(!showProfile)}>
                          Edit Profile
                        </p>
                        <button className="profile-box-btn" onClick={logout}>Logout</button>
                      </>
                    ) : (
                      <>
                        <h4 style={{ fontWeight: 600 }}>Hello User</h4>
                        <p className="profile-box-title">
                          To access your Meesho account
                        </p>
                        <button className="profile-box-btn" onClick={loginClick} >Sign Up</button>
                      </>
                    )}
                  </div>
                )}
              </div>


              <div className="fz-15">
                <a href="Wishlist.html">
                  <i
                    style={{ marginLeft: 14 }}
                    className="fa-regular fa-heart"
                  />
                </a>
                <p>Wishlist</p>
              </div>
              <div className="fz-15">
                <i
                  style={{ marginLeft: 5 }}
                  className="fa-solid fa-cart-shopping"
                />
                <p onClick={() => router("/cart")}>Cart</p>
              </div>


            </div>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid grey" }}>
          <div className="top2">
            <ul className="top2-menu">
              <li onClick={() => router("/mens-products")}>Men</li>
              <li onClick={() => router("/womens-products")}>Women</li>
              <li>
                <a href="product3.html">Kids</a>
              </li>
              <li>
                <a href="product4.html">Home Appliances</a>
              </li>
              <li>
                <a href="product5.html">Beauty Products</a>
              </li>
              <li>
                <a href="product6.html">Ethinic Wears</a>
              </li>
              <li>
                <a href="product7.html">Jewellery &amp; Accesories</a>
              </li>
              <li>
                <a href="product8.html">Bag &amp; Footwear</a>
              </li>
              <li>
                <a href="product9.html">Electronics</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showAdd && (
        <AddProduct
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          proCount={proCount}
          setProCount={setProCount}
        />
      )}
      {
        showProfile && <Profile showProfile={showProfile} setShowProfile={setShowProfile}/>
      }
      
    </header>
  );
};

export default Navbar;
