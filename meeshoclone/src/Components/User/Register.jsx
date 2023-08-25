import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Context";
import './Form.css'
const Register = () => {
  const{state}=useContext(AuthContext)
  const router = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
   password: "",
    confirmedPassword: "",
    role: "Buyer",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.role &&
      userData.password &&
      userData.confirmedPassword
    ) {
      if (userData.password === userData.confirmedPassword) {
      const response=await axios.post("http://localhost:8002/register",{userData})
      if(response.data.success){
        setUserData({
          name: "",
          email: "",
          role:"Buyer",
          password: "",
          confirmedPassword: "",
        });
        toast.success(response.data.message);
        router("/login");
      }else {
        toast.error(response.data.message);
      }
      }
      else {
        toast.error("Password & Confirm Password not matched");
      }
    }else{
      toast.error("All Fields are Compulsory")
    }
  };

  function selectRole(e){
  setUserData({...userData,role:e.target.value})
  }
  useEffect(()=>{
    if(state?.user?.name){
    router("/")
    }
    },[state])
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
              <option >Buyer</option>
              <option >Seller</option>
            </select>
            <input
              type="password"
              placeholder="Create new password"
              onChange={handleChange}
              name="password"
              value={userData.password}
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
