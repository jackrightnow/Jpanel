import React, {Component} from 'react';
import Home from './home/Home';

import { UserContext, defaultUser } from '../context/user-context';
import "../styles/base.scss";

class App extends React.Component{
  render(){
    return(
      <div>
        <UserContext.Provider value={defaultUser}>
          <h1>My React App Works1</h1>
          <Home />
        </UserContext.Provider>
      </div>
    )
  }
}

export default App;
