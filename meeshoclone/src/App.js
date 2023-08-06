import { Route, Routes } from "react-router-dom";
import Home from "./Components/Basic/Home";
import Navbar from "./Components/Basic/Navbar";
import Footer from "./Components/Basic/Footer";
import MensProducts from "./Components/Categories/Mens-Products/MensProducts";
import WomenProducts from "./Components/Categories/Womens-Products/WomenProducts";
import HomeProducts from "./Components/Categories/Home-Products/HomeProducts";
import KidsProducts from "./Components/Categories/Kids-Products/KidsProducts";
import BeautyProducts from "./Components/Categories/Beauty-Products.jsx/BeautyProducts";
import Cart from "./Components/Cart/Cart";
import SingleProduct from "./Components/Categories/SingleProduct";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import Wishlist from "./Components/Cart/Wishlist";
import { useState } from "react";

function App() {
  const[proCount,setProCount]=useState(false)
  return (
    <>
<Navbar proCount={proCount} setProCount={setProCount}/>
<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/mens-products" element={<MensProducts proCount={proCount} setProCount={setProCount}/>}/>
  <Route exact path="/womens-products" element={<WomenProducts/>}/>
  <Route exact path="/kids-products" element={<KidsProducts/>}/>
  <Route exact path="/beauty-products" element={<BeautyProducts/>}/>
  <Route exact path="/home-products" element={<HomeProducts/>}/>
  <Route exact path="/cart" element={<Cart/>}/>
  <Route exact path="/single-product/:userId" element={<SingleProduct/>}/>
  <Route exact path="/login" element={<Login/>}/>
  <Route exact path="/register" element={<Register/>}/>
  <Route exact path="/wishlist" element={<Wishlist/>}/>
</Routes>
<Footer/>
</>
  )
}

export default App;
