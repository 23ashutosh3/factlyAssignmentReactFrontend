import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from "../../context/UserContext"
import Axios from 'axios'
export default function Login() {
    const [email,setEmail]=useState();
    const[password,setPassword]=useState();
    
	const {setUserData}=useContext(UserContext)
    const history=useHistory();

    const submit=async(e)=>{
        e.preventdefault();
       
        const loginUser={email,password};
         const loginRes=await Axios.post("https://localhost:5000/users/login",
         { 
            loginUser
         });
         setUserData({
             token:loginRes.data.token,
             user:loginRes.data.user,
         })
         localStorage.setItem("auth-token",loginRes.data.token)
         history.push("/");
       

   }
    return (
        <div className="page">
        <h2>Log In</h2>
        <form className="form "onSubmit={submit}>
            <label htmlFor="login-email">Email</label>
             <input id="login-email" type="email"
            onChange={(e)=> setEmail(e.target.value)}
            />

            <label htmlFor="login-password">Email</label>
            <input id="login-password" type="password"
            onChange={(e)=> setPassword(e.target.value)}/>


            <input type="submit" value="login"/> 
        </form>
    </div>
    )
}