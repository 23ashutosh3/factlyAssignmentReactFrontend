import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from "../../context/UserContext"
import Axios from 'axios'


export default function Register() {
	const [post,setpost]=useState();
	const[author,setauthor]=useState();
	const[catogories,setcatogories]=useState();

	const {setUserData}=useContext(UserContext)
	const history=useHistory();
	
	const submit=async(e)=>{
		 e.preventdefault();

			const newPost={post,author,catogories};
			await Axios.post("https://localhost:5000/users/register",newPost);
			 history.push("/");
	}
	return (
		<div className="page">
			<h2>Post</h2>
			<form className="form" onSubmit={submit}>
			<label htmlFor="author">Author Name</label>
				<input id="author" type="text"
				onChange={(e)=> setauthor(e.target.value)}/>

                <label htmlFor="setcatogories">Categories</label>
				<input type="text" placeholder="Categories"
				onChange={(e)=> setcatogories(e.target.value)}/>
				
				<label htmlFor="Post">Your blog</label>
				<textarea id="w3review" name="w3review" rows="16" cols="70" 
				onChange={(e)=> setpost(e.target.value)}/>
			
				<input type="submit" value="submit"/> 
			</form>
		</div>
	)
}
