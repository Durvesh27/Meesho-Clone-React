import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext=createContext();

const initialValue={user:null}

function reducer(state,action){
switch(action.type){
case "LOGIN":
return {...state,user:action.payload}
case "LOGOUT":
return {...state,user:null}
default:
return state
}
}

const AuthProvider=({children})=>{
const[state,dispatch]=useReducer(reducer,initialValue)

function login(activeUser){
dispatch({
type:"LOGIN",
payload:activeUser
})
}


useEffect(() => {
    const getCurrentUserData = async () => {
      const token = JSON.parse(localStorage.getItem("Token2"));
      const response = await axios.post(
        "http://localhost:8002/getCurrentUser",
        { token }
      );
      if (response.data.success) {
        dispatch({
          type: "LOGIN",
          payload: response.data.user
        });
      } else {
        dispatch({
          type: "LOGOUT",
        });
      }
    };
    getCurrentUserData();
  }, []);

return(
<AuthContext.Provider value={{state,login}}>
    {children}
</AuthContext.Provider>
)


}
export default AuthProvider;