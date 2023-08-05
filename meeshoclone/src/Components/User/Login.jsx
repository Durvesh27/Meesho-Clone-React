import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import './Form.css'
const Login = () => {
  const [currentUserData, setCurrentUserData] = useState({
    email: "",
    password: "",
  });
  const router = useNavigate();
  const handleChange = (e) => {
    setCurrentUserData({ ...currentUserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUserData.email && currentUserData.password) {
      const getData = JSON.parse(localStorage.getItem("Users"));
      let flag = false;
      for (let i = 0; i < getData.length; i++) {
        if (
          currentUserData.email === getData[i].email &&
          currentUserData.password === getData[i].password
        ) {
          flag = true;
          break;
        }
      }
      if (flag === false) {
        setCurrentUserData({ email: "", password: "" });
        return alert("Invalid credentials");
      } else {
        localStorage.setItem("Current-User", JSON.stringify(currentUserData));
        toast.success("Logged in successfully");
        router("/");
        setCurrentUserData({ email: "", password: "" });
      }
      
    } else {
      toast.error("Please fill all the fields");
    }
  };
  return (
<div className="form-body">
  <div className="login">
    <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt />
    <div className="content">
      <p>Sign-up to view your profile</p>

      <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Email Address"
              onChange={handleChange}
              name="email"
              value={currentUserData.email}
              className="content-input"
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              name="password"
              value={currentUserData.password}
              className="content-input"
            />
            <input type="submit" value="Login" className="content-submit" />
          </form>
      <div className="last">Are you new to Meesho? <b onClick={()=>router('/register')}> Create Account</b></div>
    </div>
  </div>
</div>

  )
}

export default Login
