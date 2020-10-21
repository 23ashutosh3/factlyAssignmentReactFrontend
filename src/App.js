import React,{useState,useEffect} from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './components/pages/Home'
import Axios from 'axios'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Header from './components/layouts/header'
import UserContext from './context/UserContext'
import './App.css'
function App() {
const [userData ,setUserData]=useState({
  token:undefined,
  user:undefined,
});


useEffect(()=>{
const checkLoggedIn=async()=>
{
  let token=localStorage.getItem("auth-token");
  if(token===null)
  {
    localStorage.setItem("auth-token","");
    token="";
  }
  const tokenRes=await Axios.post("https://localhost:5000/users/tokenValid",null,
  {headers:{"x-auth-token":token}}
  );
  if(tokenRes.data)
  {
    const userRes=await Axios.get("http://localhost:5000/users/",
   { headers:{"x-auth-token" :token},
  });
  setUserData({
    token,
    user:userRes.data,
  })
  }
  console.log(tokenRes.data)
}
checkLoggedIn()
},[])
  return (
 <>
 <BrowserRouter>
 <UserContext.Provider value={{userData,setUserData}}>
 <Header/>
        <Switch>
          <Route exact path ="/" component={Home}></Route>
          <Route path ="/login" component={Login}></Route>
          <Route path ="/register" component={Register}></Route>
          {/*<Route path ="/home" component={Register}></Route>*/}

        </Switch>
        </UserContext.Provider>
        </BrowserRouter>
        </>
    
  );
}

export default App;
