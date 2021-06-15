import React,{useState,useEffect} from 'react' 
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Welcome from './components/WelcomePage/Welcome';
import Error from './pages/ErrorPage/Error';
import Login from './pages/Login/Login';
import SearchNoLogin from './pages/SearchNoLogin/SearchNoLogin';
import Signup from './pages/Signup/Signup';
import UserProfile from './pages/UserProfile/UserProfile';
import {useDispatch} from "react-redux"
import {checkUserAuth} from "./redux/actions/globalAction"


const App = ()=> {
  const  dispatch = useDispatch()

  useEffect(()=>{
    console.log("CheckUSerAuth")
    dispatch(checkUserAuth())
  },[dispatch])

  return (
    <div className="App">

      <Header/>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route  path="/signup" component={Signup}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/user/profile" component={UserProfile}/>
        <Route  path="/search/:srhQuery" component={SearchNoLogin}/>
        <Route  component={Error}/>
      </Switch>
  
  <Footer/>

    </div>
  );
}

export default App;