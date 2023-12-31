import React from "react";
import "./Seller.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
const AddProduct = ({showAdd,setShowAdd,proCount,setProCount}) => {
  const [addPro, setAddPro] = useState({
    pri: "",
    sec: "",
    price1: "",
    price2: "",
    category: "Men Clothing",
    imgsrc: "",
  });
  function handleChange(e) {
    setAddPro({ ...addPro, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      addPro.pri &&
      addPro.sec &&
      addPro.price1 &&
      addPro.price2 &&
      addPro.category &&
      addPro.imgsrc
    ) {
      const products = JSON.parse(localStorage.getItem("Men"));
      addPro.id = Math.random() * 100;

      let proDetails = {
        pri: addPro.pri,
        sec: addPro.sec,
        price1: addPro.price1,
        category: addPro.category,
        imgsrc: addPro.imgsrc,
        id: addPro.id,
        price2: addPro.price2,
      };
      products.push(proDetails);
      localStorage.setItem("Men", JSON.stringify(products));
      toast.success("Product added");
      setProCount(!proCount)
      setShowAdd(!showAdd)
    }
  }
  return (
    <div>
      <div className="opacity"></div>
      <div className="add-product">
        <h2 className="add-title">
          Add product{" "}
          <span
            style={{ fontSize: "18px", marginLeft: "350px" }}
            onClick={() => setShowAdd(!showAdd)}
          >
            X
          </span>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Product Title"
            className="add-input"
            name="pri"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Product Description"
            className="add-input"
            name="sec"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Selling Price"
            className="add-input"
            name="price1"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter MRP"
            className="add-input"
            name="price2"
            onChange={handleChange}
          />
          <select className="add-input" name="category" onChange={handleChange}>
            <option>Mens Clothing</option>
            <option>Womens Clothing</option>
            <option>Kids Clothing</option>
            <option>Home Appliances</option>
            <option>Beauty Products</option>
          </select>
          <input
            type="text"
            placeholder="Enter Image URL"
            className="add-input"
            name="imgsrc"
            onChange={handleChange}
          />
          <input type="submit" value="Add Product" className="add-btn"  />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
