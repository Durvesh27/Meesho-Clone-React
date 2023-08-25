import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import './Form.css'
import { AuthContext } from "../../Context";
const Login = () => {
const{login,state}=useContext(AuthContext)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router = useNavigate();
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
        const response = await axios.post("http://localhost:8002/login", { userData });
        if (response.data.success) {
            setUserData({ email: "", password: "" })
            router('/')
            toast.success(response.data.message)
            localStorage.setItem("Token2",JSON.stringify(response.data.token))
            login(response.data.user)
            console.log(response.data)
        } else {
            toast.error(response.data.message)
        }
        console.log(response,"working")
    } else {
        toast.error("All fields are mandtory.")
    }
  };
  useEffect(()=>{
    if(state?.user?.name){
    router("/")
    }
    },[state])

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
              value={userData.email}
              className="content-input"
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              name="password"
              value={userData.password}
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
