import React from 'react'
import './Home.css'
const Home = () => {
  return (
<div className="body">
  <div className="section-1">
    <div className="main-image">
      <img src="https://images.meesho.com/images/marketing/1686234459500_512.webp" alt />
    </div>
    <div className="main-text">
      <p>Lowest Prices</p>
      <p>Best Quality Shopping</p>
      <div className="flex-contain">
        <div className=" flex-radius">
          <img src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg" alt className="circle" />
          <span className="pl8 fw">Free <br />Delivery</span>
        </div>
        <div className=" flex-radius blr">
          <img src="https://images.meesho.com/images/pow/cod_jamun.svg" alt className="circle" />
          <span className="pl8 fw">Cash on <br />Delivery</span>
        </div>
        <div className="flex-radius fw">
          <img src="https://images.meesho.com/images/pow/easyReturns_jamun.svg" alt className="circle" />
          <span className="pl8">Easy <br />Returns</span>
        </div>
      </div>
      <div className="download">
        <img src="https://images.meesho.com/images/pow/playstoreSmallIcon.png" alt />
        <span className="ml-16px fs-18 white fw">Download the Meesho App</span>
      </div>
    </div>
  </div>
  <div className="section-2 ">
    <div className="section2-text">
      <div className="line" />
      <p>Top Categories to choose from</p>
      <div className="line" />
    </div>
    <div className="section-2A">
      <img className=" img1" src="https://images.meesho.com/images/marketing/1678691686252_400.webp" alt />
      <img className=" img2" src="https://images.meesho.com/images/marketing/1678691699680_300.webp" alt />
      <img className=" img2" src="https://images.meesho.com/images/marketing/1678691712594_300.webp" alt />
    </div>
    <div className="section-2B">
      <div className="section-2B-left">
        <img src="https://images.meesho.com/images/marketing/1678691759889_200.webp" alt />
      </div>
      <div className="section-2B-right">
        <div className="2B-1">
          <img src="https://images.meesho.com/images/marketing/1678691846068_200.webp" alt /><br />
          <img className="ml-27px" src="https://images.meesho.com/images/marketing/1678691858580_150.webp" alt />
        </div>
        <div className="2B-1">
          <img src="https://images.meesho.com/images/marketing/1678691832099_200.webp" alt /><br />
          <img className="ml-27px" style={{width: 160, height: 57, marginTop: '-1px', marginLeft: 22}} src="https://images.meesho.com/images/marketing/1678691818629_150.webp" alt />
        </div>
        <div className="2B-1">
          <img src="https://images.meesho.com/images/marketing/1678691796046_200.webp" alt /><br />
          <img className="ml-27px" src="https://images.meesho.com/images/marketing/1678691781261_150.webp" alt />
        </div>
      </div>
    </div>
    <div className="section-2C">
      <div className="section-2B-left">
        <img src="https://images.meesho.com/images/marketing/1678691759889_200.webp" alt />
      </div>
      <div className="section-2B-right">
        <div className="2B-1">
          <img src="https://images.meesho.com/images/marketing/1678691960553_200.webp" alt /><br />
          <img className="ml-27px" src="https://images.meesho.com/images/marketing/1678691971903_150.webp" alt />
        </div>
        <div className="2B-1">
          <img src="https://images.meesho.com/images/marketing/1678691936892_200.webp" alt /><br />
          <img className="ml-27px" src="https://images.meesho.com/images/marketing/1678691948963_150.webp" alt />
        </div>
        <div className="2B-1">
          <img src="https://images.meesho.com/images/marketing/1678691925419_200.webp" alt /><br />
          <img className="ml-27px" src="https://images.meesho.com/images/marketing/1678691914513_150.webp" alt />
        </div>
      </div>
    </div>
    <div className="section-2D">
      <img src="https://images.meesho.com/images/pow/downloadBannerDesktop_1050.webp" alt />
      <div className="content-2D">
        <h1 className="fw-500" style={{color: 'rgb(85, 133, 248)', marginBottom: 22}}>Become a Reseller and</h1>
        <p className="main-2D">Start your own Online Business<br />
          with Zero Investment
        </p>
        <div className="boxes-2D">
          <div className="box1-2D">
            <img src="https://images.meesho.com/images/pow/playstoreIcon_500.webp" alt />
          </div>
          <div className="box1-2D">
            <img src="https://images.meesho.com/images/pow/appstoreIcon_500.webp" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-3">
    <h2 className="section-3top">Products For You</h2>
    <div className="section-3flex">
      <div className="section-3left">
        <div className="box1-3D">
          <div className="sort">
            <span>Sort by:<b> Relevance</b></span>
            <i onclick="newDrop()" id="click" className="fa-solid fa-angle-down" />
          </div>
          <div className="select" id="display" style={{display: 'none'}}>
            <div className="item">Relevance</div>
            <div className="item">New Arrivals</div>
            <div className="item">Price:High to Low</div>
            <div className="item">Price:Low to High</div>
            <div className="item">Ratings</div>
            <div className="item">Discount</div>
          </div>
        </div>
        <div className="box2-3D">
          <div className="one">
            <span style={{fontWeight: 550}}>FILTERS</span>
            <p style={{fontSize: 12, margin: '8px 0'}}>1000+ Products</p>
            <div className="left-box">
              <div className="left-name">
                <span>Category</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
              <div className="left-content" id="home" style={{display: 'none'}}>
                <i className="fa-solid fa-magnifying-glass " />
                <input type="search" placeholder="Search" />
                <p className="left-row">
                  <input type="checkbox" />
                  <span>Analog Watches</span>
                </p>
                <p className="left-row">
                  <input type="checkbox" />
                  <span>Analog Watches</span>
                </p>
                <p className="left-row">
                  <input type="checkbox" />
                  <span>Analog Watches</span>
                </p>
                <p className="left-row">
                  <input type="checkbox" />
                  <span>Analog Watches</span>
                </p>
                <p className="left-row">
                  <input type="checkbox" />
                  <span>Analog Watches</span>
                </p>
                <p className="left-row">
                  <input type="checkbox" />
                  <span>Analog Watches</span>
                </p>
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Gender</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" style={{transform: 'rotate(180deg)'}} />
              </div>
              <div className="gender" id="home"> 
                <span>Boys</span>
                <span>Girls</span>
                <span>Men</span>
                <span>Women</span>
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Fabric</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Oxfords</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>dail_shape</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Colour</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Price</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Meesho Mall</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3right">
        <div className="main">
          <img src="https://images.meesho.com/images/products/59578636/7to43_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <span>
                  <i className="fa-solid fa-star" />
                </span>
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/191910563/aa4pq_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Everyday Diapers</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/103713364/0ioi6_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/22486015/1a522_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/31536766/ltqhe_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/140598388/ailwc_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/21005838/yd1tm_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/22275190/3c4b6_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/77200662/mavuc_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/39795667/e3fg8_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/42958844/zzzh2_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <img src="https://images.meesho.com/images/products/119140062/1yz6y_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Bluetooth Headphones</p>
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
                <i className="fa-solid fa-star" />
              </span>
              <span className="fs-12 color">
                61095 Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home
