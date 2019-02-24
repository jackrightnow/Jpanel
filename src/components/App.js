import React, {Component} from 'react';
import Home from './home/Home';

import { UserContext, defaultUser } from '../context/user-context';


class App extends Component{
  render(){
    return(
      <div>
        <UserContext.Provider value={defaultUser}>
          <h1>Ugur Soft Testing</h1>
          <Home />
        </UserContext.Provider>
      </div>
    )
  }
}

export default App;
