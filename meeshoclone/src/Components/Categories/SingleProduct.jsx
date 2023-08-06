import React, { useContext, useEffect, useState } from 'react'
import './SingleProduct.css'
import { useParams } from 'react-router-dom'
import { toast } from "react-hot-toast";
import MensData from './Mens-Products/MensData'
import WomensData from './Womens-Products/WomensData'
import UpdateProduct from '../Seller/UpdateProduct';
import { AuthContext } from '../../Context';
const SingleProduct = () => {
const {userId}=useParams()
const[proData,setProData]=useState()
const[click,setClick]=useState(false)
const{state}=useContext(AuthContext)
const products = JSON.parse(localStorage.getItem("Men"));
useEffect(() => {
  products.map((data) => {
    if (data.id == userId) {
      setProData(data);
    }
  });
}, []);

useEffect(() => {
  WomensData.map((data) => {
    if (data.id == userId) {
      setProData(data);
    }
  });
}, []);


function addTocart() {
  const currentUser = JSON.parse(localStorage.getItem("Current-User"));
  const users = JSON.parse(localStorage.getItem("Users"));
  users.forEach((item) => {
    if (item.email === currentUser.email) {
      item.cart.push(proData);
      toast.success("Item Added to cart");
    }
  });
  localStorage.setItem("Users", JSON.stringify(users));
  
}

  return (
<div className="body">
  <div className="body-section">
    <div className="left-body-section">
      <div className="left-body1">
        <img src={proData?.imgsrc} alt="" />
        <img src={proData?.imgsrc} alt="" /><br />
        <img src={proData?.imgsrc}alt=""/><br />
        <img src={proData?.imgsrc} alt="" />
      </div>   
      <div className="left-body2">
        <div className="main-img">
          <img src={proData?.imgsrc} alt=""/>
        </div>
        {
        state?.user?.role==="Buyer"?
        
        <div className="left-buttons">
          <button className="purple-color">
            <i className="fa-solid fa-cart-shopping purple-color" />
            <span onClick={addTocart}>Add to Cart</span>
          </button>
          <button className="purple-color">
            <i className="fa-solid fa-angles-right purple-color" />
            <span>Buy now</span>
          </button>
        </div>:
                  <button className="purple-color update-button">
                  <i class="fa-solid fa-pen" style={{marginRight:"5px"}}></i>
                  <span onClick={()=>setClick(!click)}>Update Product</span>
                </button>
}
        <div className="similar">
          <h3>9 Similar Products</h3>
          <img src="https://images.meesho.com/images/products/266108669/dnuva_128.webp" alt />
          <img src="https://images.meesho.com/images/products/266108670/szcfi_128.webp" alt />
          <img src="https://images.meesho.com/images/products/266108671/23rzv_128.webp" alt />
          <img src="https://images.meesho.com/images/products/266108672/sraw0_128.webp" alt />
          <img src="https://images.meesho.com/images/products/266108673/osk1v_128.webp" alt />
          <img src="https://images.meesho.com/images/products/266108674/qhdwd_128.webp" alt />
        </div>
      </div> 
    </div>
    <div className="right-body-section">
      <div className="right-sec1">
        <h3 style={{color: 'rgb(139, 139, 163)', marginTop: 20}}>{proData?.sec}</h3>
        <h1 style={{fontWeight: 500, marginTop: 10, fontSize: 30}}>₹375</h1>
        <div style={{marginTop: 15, marginBottom: 15}}>
          <span className="star-box">
          5.0
            <span>
              <i className="fa-solid fa-star fa-xs" style={{color: 'white'}} />
            </span>
          </span>
          <span style={{fontSize: 12, marginLeft: 3, color: 'rgb(139, 139, 163)'}}>
            1095 Ratings,219 Reviews
          </span>
        </div>
        <span className="login-box">Free Delivery</span>
      </div>
      <div className="right-sec2">
        <h3>Select Size</h3>
        <button>Free Size</button>
      </div>
      <div className="right-sec3">
        <h3>Product Detalis</h3>
        <p>Name : {proData?.sec}</p>
        <p>Saree Fabric : Art Silk</p>
        <p>Blouse : Running Blouse</p>
        <p>Blouse Fabric : Jacquard</p>
        <p>Pattern : Solid</p>
        <p>Blouse Pattern : Same as Border</p>
        <p>Net Quantity (N) : Single</p>
        <p>Art Silk Saree With Big Jacquard Panel and Daimond<br /> work,Jacquard Flower Butta,Jacquard Big Lase. Jacquard<br /> Blouse(0.80m).Thank you For Choosing Our Brand Product To Wear.<br /> We Hope That You Feel too much Better After Purchase Our<br /> Product.</p>
        <p>Sizes:<br />Free Size (Saree Length Size : 5.3 m, Blouse Length Size: 0.8 m)</p>
        <p>Country of Origin : India</p>
        <span style={{borderBottom: '1px dotted black'}}>More Information</span>
      </div>
      <div className="right-sec4">
        <h3>Sold by</h3>
        <div className="sec4-flex">
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src="https://images.meesho.com/images/pow/shop_100.webp" alt />
            <h4 style={{fontSize: "17px", fontWeight: 550}}>PISIFERA</h4>
          </div>
          <button>View Shop</button>
        </div>
        <div className="sec4-container">
          <div className="cont1" style={{display:"block"}}>
            <span className="star-1">
              {proData?.rating}
              <i className="fa-solid fa-star fa-xs" style={{color: 'rgb(85, 133, 248)'}} />
            </span>
            <p style={{marginTop: "8px", color: 'rgb(97, 97, 115)', fontSize: "15px"}}>6,161 Ratings</p>
          </div>
          <div className="cont2">
            <p style={{fontWeight: 550}}>235</p>
            <p style={{marginTop: "8px", color: 'rgb(97, 97, 115)', fontSize: "15px"}}>Followers</p>
          </div>
          <div className="cont3">
            <p style={{fontWeight: 550}}>80</p>
            <p style={{marginTop:"8px", color: 'rgb(97, 97, 115)', fontSize: "15px"}}>Products</p>
          </div>
        </div>
      </div>
      <div className="right-sec5">
        <h3>Products,Ratings &amp; Reviews</h3>
        <div className="flex-rating">
          <div style={{width: '30%', padding: '41px 0'}}>
            <span style={{color: 'rgb(3, 141, 99)', fontWeight: 600}}>4.0</span>
            <i className="fa-solid fa-star fa-lg" style={{color: 'rgb(3, 141, 99)', position: 'relative', top: '-15px'}} />
            <p style={{fontSize: "12px", lineHeight: "15px", color: 'rgb(139, 139, 163)', fontWeight: 550}}>1096 Ratings<br />
              219 Reviews</p>
          </div>
          {/* linings */}
          <div style={{width: '70%', lineHeight: "35px", display: 'flex'}}>
            <div className="good">
              <p>Excellent</p>
              <p>Very good</p>
              <p>Good</p>
              <p>Average</p>
              <p>Poor</p>
            </div>
            <div>
              <div className="index">
                <div className="line1a" />
                <div className="line1b" />
              </div>
              <div className="index">
                <div className="line2a" />
                <div className="line2b" />
              </div>
              <div className="index ">
                <div className="line3a" />
                <div className="line3b" />
              </div>
              <div className="index">
                <div className="line4a" />
                <div className="line4b" />
              </div>
              <div className="index">
                <div className="line5a" />
                <div className="line5b" />
              </div>
            </div>
            <div className="num">
              <p>581</p>
              <p>208</p>
              <p>128</p>
              <p>70</p>
              <p>123</p>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="rev1">
            <h4>Real Images &amp; Videos from Customers</h4>
            <img src="https://images.meesho.com/images/ratings_reviews/1903159164/1916695168/1903159164_1916695168_305827cd8cd5c_128.jpeg" alt />
            <img src="https://images.meesho.com/images/ratings_reviews/2076663612/2090986098/2076663612_2090986098_54636c5d1b752_128.jpeg" alt />
            <img src="https://images.meesho.com/images/ratings_reviews/2076663612/2090986098/2076663612_2090986098_4924ce2b96829_128.jpeg" alt />
          </div>
          <div className="rev2">
            <div style={{display: 'flex', alignItems: 'center', marginBottom: 15}}>
              <img style={{width: "24px", height: "24px", borderRadius: '50%', marginRight: "5px"}} src="https://images.meesho.com/images/reseller/profile_image/8d66966eee7219afcb9be21637826f28_3c02815644370_1661950032787_512.jpg" alt />
              <span style={{fontSize: "15px", fontWeight: 550, color: 'rgb(97, 97, 115)'}}>S B</span>
            </div>
            <p className="disp">
              <span style={{marginRight: 8, fontSize: 15}} className="span-butt">
                5.0
                <i className="fa-solid fa-star fa-xs" />
              </span>
              <span style={{fontSize: "12px", color: 'rgb(139, 139, 163)'}}>posted on 15 Apr 2023</span>
            </p>
            <h4 style={{color: 'rgb(53, 53, 67)', fontWeight: 500, marginTop: "20px", marginBottom: "5px"}}>Nyc products I'm so happy cloth is nyc</h4>
            <img src="https://images.meesho.com/images/ratings_reviews/1903159164/1916695168/1903159164_1916695168_305827cd8cd5c_128.jpeg" alt style={{width: 72, height: "72px", borderRadius: "8px", marginTop: "10px"}} />
          </div>
          <div className="rev2">
            <div style={{display: 'flex', alignItems: 'center', marginBottom: "15px"}}>
              <img style={{width: "24px", height: "24px", borderRadius: '50%', marginRight: "5px"}} src="user.png" alt />
              <span style={{fontSize: "15px", fontWeight: 550, color: 'rgb(97, 97, 115)'}}>Ranjitha</span>
            </div>
            <p className="disp">
              <span style={{marginRight: 8, fontSize: 15}} className="span-butt">
                4.5
                <i className="fa-solid fa-star fa-xs" />
              </span>
              <span style={{fontSize: 12, color: 'rgb(139, 139, 163)'}}>posted on 23 Mar 2023</span>
            </p>
            <h4 style={{color: 'rgb(53, 53, 67)', fontWeight: 500, marginTop: 20, marginBottom: 5}}> Good Saree</h4>
            <img src="https://images.meesho.com/images/ratings_reviews/2076663612/2090986098/2076663612_2090986098_54636c5d1b752_128.jpeg" alt style={{width: 72, height: 72, borderRadius: 8, marginTop: 10}} />
            <img src="https://images.meesho.com/images/ratings_reviews/2076663612/2090986098/2076663612_2090986098_4924ce2b96829_128.jpeg" alt style={{width: 72, height: 72, borderRadius: 8, marginTop: 10}} />
          </div>
          <h4 style={{color: 'rgb(159, 32, 137)'}}>VIEW ALL REVIEWS&nbsp;&nbsp;&gt;</h4>
        </div>
      </div>
      <div className="right-sec6">
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src="https://images.meesho.com/images/value_props/lowest_price_pbd.png" alt />
          <p>Lowest<br />Price</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', borderRight: '3px solid white', borderLeft: '3px solid white', padding: '0 64px'}}>
          <img src="https://images.meesho.com/images/value_props/cash_on_delivery_pbd.png" alt />
          <p>Cash on<br />Delivery</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src="https://images.meesho.com/images/value_props/7_day_returns_pbd.png" alt />
          <p>7-Day<br /> Return</p>
        </div>
      </div>
    </div>
  </div>
  <div className="rest-product">
    <h3 style={{marginBottom: 15}}>People also viewed</h3>
    <div className="rest-flex">
      <div className="main">
        <img src="https://images.meesho.com/images/products/267731079/ejhad_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <img src="https://images.meesho.com/images/products/267947791/n9xif_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <img src="https://images.meesho.com/images/products/266387223/oh5cu_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <img src="https://images.meesho.com/images/products/239500469/bqhnv_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <img src="https://images.meesho.com/images/products/264254709/qvyqu_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <img src="https://images.meesho.com/images/products/165066871/klm8l_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <img src="https://images.meesho.com/images/products/264254746/fawae_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <img src="https://images.meesho.com/images/products/264254829/wsbjp_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <img src="https://images.meesho.com/images/products/15391790/81ba4_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <img src="https://images.meesho.com/images/products/271135837/iysod_400.webp" alt />
        <div className="text">
          <p className="color mb-15">Aagyegi Yogyeush Saree</p>
          <p className="mb-12">
            <strong className="fs-22">
              ₹299
            </strong>
            <span className="fs-12 color">onwards</span>
          </p>
          <span style={{backgroundColor: 'rgb(234, 233, 233)', padding: '6px 10px', borderRadius: 12, fontSize: 12}}>
            Delivery₹88
          </span><br />
          <div style={{marginTop: 20, marginBottom: 5}}>
            <span style={{backgroundColor: 'rgb(35, 187, 117)', color: 'white', padding: '4px 8px', borderRadius: 16, marginRight: 3, fontWeight: 600}}>
              3.8
              <i className="fa-solid fa-star fa-xs" />
            </span>
            <span className="fs-12 color">
              61095 Reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {click && (
        <UpdateProduct
          id={proData?.id}
          setProData={setProData}
          click={click}
          setClick={setClick}
        />
      )}

</div>

  )
}

export default SingleProduct
