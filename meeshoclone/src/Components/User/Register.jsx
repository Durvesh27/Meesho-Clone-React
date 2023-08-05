import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './Form.css'
const Register = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    enteredPassword: "",
    confirmedPassword: "",
    role: "Buyer",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.enteredPassword &&
      userData.confirmedPassword
    ) {
      if (userData.enteredPassword === userData.confirmedPassword) {
        const array = JSON.parse(localStorage.getItem("Users")) || [];
        const data = {
          name: userData.name,
          email: userData.email,
          password: userData.enteredPassword,
          role: userData.role,
          cart: [],
        };

        if (array.length >= 0) {
          for (let i = 0; i < array.length; i++) {
            if (
              array[i].email === userData.email &&
              array[i].password === userData.enteredPassword
            ) {
              setUserData({
                name: "",
                email: "",
                enteredPassword: "",
                confirmedPassword: "",
              });
              return toast("Account Already Exist");
            }
          }
        }

        array.push(data);
        localStorage.setItem("Users", JSON.stringify(array));
        toast.success("Account Created Successfully");
        router("/login");
        setUserData({
          name: "",
          email: "",
          enteredPassword: "",
          confirmedPassword: "",
        });
      } else {
        return toast.error("Please check entered password");
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  function selectRole(e) {
    setUserData({ ...userData, role: e.target.value });
  }
  return (
    <div className="form-body">
      <div className="login">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt
        />
        <div className="content">
          <p>Register for Shopping</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={handleChange}
              name="name"
              value={userData.name}
              className="content-input"
            />
            <input
              type="email"
              placeholder="Enter your Email address"
              onChange={handleChange}
              name="email"
              value={userData.email}
              className="content-input"
            />
            <br />
            <select onChange={selectRole} className="content-select">
              {/* <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Home Applicances</option>
              <option>Beauty Products</option> */}
              <option >Buyer</option>
              <option >Seller</option>
            </select>
            <input
              type="password"
              placeholder="Create new password"
              onChange={handleChange}
              name="enteredPassword"
              value={userData.enteredPassword}
              className="content-input"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              onChange={handleChange}
              name="confirmedPassword"
              value={userData.confirmedPassword}
              className="content-input"
            />
            <input type="submit" value="Continue" className="content-submit" />
          </form>

          <div className="last">
            Already have an account?{" "}
            <a href="login.html">
              <b> Sign-up</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
