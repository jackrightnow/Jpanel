import React, {Component, useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';

//import GlobalState from '../context/GlobalState';
//import UserContext from '../context/user-context';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

import UserContext from '../context/user-context'




const Nav = props => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )
}

const App = props => {

  //const uc = useContext(UserContext);
  let initUserData = {userName: "ugur cemil"};
  if(localStorage.getItem('userData')){
    initUserData = JSON.parse(localStorage.getItem('userData'));
  }

  const [userTokenId, setUserTokenId] = useState(localStorage.getItem('userTokenId') || 0);
  const [userData, setUserData] = useState(initUserData);
  
  const globalSettings = {
    userTokenId: userTokenId,
    userData: userData,
    base_url: 'http://localhost:8080/',
    api_url: 'http://192.168.33.10/JPanelRest/KpApi/',
    setUserData: setUserData,
    setUserTokenId: setUserTokenId,
  }

  useEffect(()=>{
    //console.log("App ok")
    //console.log(userTokenId)
  });

  return(
    <UserContext.Provider
      value={globalSettings}>
      <BrowserRouter>
        <React.Fragment>
          <Switch>         
            <Route path="/" exact render={()=> 
              (userTokenId == 0 ? (<Redirect to="/login" />):(<Home />))
            } />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
