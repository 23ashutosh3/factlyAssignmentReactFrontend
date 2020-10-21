import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from "../../context/UserContext"
import '../../App.css'

export default function AuthOption() {
	const {userData,setUserData}=useContext(UserContext)
	const history=useHistory();
	const register=()=>history.push("/register")
	const login=()=>history.push("/login");
	const logout=()=>{
		setUserData({
			token:undefined,
			user:undefined
		});
		localStorage.setItem("auth-token","")
	}
	return (
		<nav className="auth-option">
			{
				userData.user?
				(
				<button onClick={logout}>Log out</button>):
				(<>
				<button onClick={register}>Register</button>
				<button onClick={login}>Log In</button>
				</>)
			}
			
		</nav>
	)
}
