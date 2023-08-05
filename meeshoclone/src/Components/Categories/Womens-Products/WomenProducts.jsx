import React from 'react'

const WomenProducts = () => {
  return (
<div className="body">
  <div className="section-3">
    <h2 style={{margin: '15px 0px'}}>Women Dresses</h2>
    <p style={{marginBottom: 20}}>Showing 1-20 out of 1000 products</p>
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
            <div className="item">Price:(High to Low)</div>
            <div className="item">Price:(Low to High)</div>
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
                  <span>Dresses</span>
                </p>
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Gender</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" style={{transform: 'rotate(180deg)'}} />
              </div>
              <div className="gender" id="home"> 
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
                <span>Discount</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Meesho Mall</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Print Type</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Back Type</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Fit/Shape</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
            <div className="left-box">
              <div className="left-name">
                <span>Warranty period</span>
                <i onclick="displayDown()" id="down" className="fa-solid fa-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3right">
        <div className="main">
          <img src="https://images.meesho.com/images/products/263459778/dpbpy_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Aishani Banaras Silk Saree</p>
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
          <img src="https://images.meesho.com/images/products/103713364/0ioi6_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Georgette Lace Saree</p>
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
          <img src="https://images.meesho.com/images/products/86375109/vgpf5_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Ikhat Georgette Saree</p>
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
          <img src="https://images.meesho.com/images/products/216358289/yqep0_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Charvi Banarasi Saree</p>
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
          <img src="https://images.meesho.com/images/products/70393359/7x5uz_400.webp" alt />
          <div className="text">
            <p className="color mb-15">ETP Silk Saree</p>
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
          <img src="https://images.meesho.com/images/products/186168075/mwial_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Ethia Georgette Saree</p>
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
          <img src="https://images.meesho.com/images/products/127154383/zy1ec_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Jivika Drishya Saree</p>
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
          <img src="https://images.meesho.com/images/products/129027539/cbifm_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Jivika Georgette Saree</p>
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
          <img src="https://images.meesho.com/images/products/17898117/fbdc9_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Marble Silk Saree</p>
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
          <img src="https://images.meesho.com/images/products/245524053/nubv7_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Chitrarekha Petite Saree</p>
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
          <img src="https://images.meesho.com/images/products/71211818/jzyor_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Jivika Net Saree</p>
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
          <img src="https://images.meesho.com/images/products/221572346/9vvyg_400.webp" alt />
          <div className="text">
            <p className="color mb-15">Kashvi Chiffon Saree</p>
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

export default WomenProducts
