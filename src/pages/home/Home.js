import React, {useState, useContext} from 'react';
import UserContext from '../../context/user-context';
import Sidebar from '../../components/Sidebar';

const Home = props => {

  

  return(
    <div className="main">
      <Sidebar />
      Anasayfa
    </div>
  )
}
export default Home;

