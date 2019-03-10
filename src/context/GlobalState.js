import React, {useState, useContext, useEffect} from 'react';
import UserContext from './user-context'


const GlobalState = props => {
  const [userTokenId, setUserTokenId] = useState(0);
  const [userData, setUserData] = useState({isim: "ugur cemil"});
  //const userContext = useContext(UserContext);
  //console.log(window.location.origin);
  const globalSettings = {
    userTokenId: userTokenId,
    userData: userData,
    base_url: 'http://localhost:8080/',
    api_url: 'http://192.168.33.10/JPanelRest/KpApi/',
    setUserData: setUserData,
    setUserTokenId: setUserTokenId,
  }
  useEffect(()=>{
    console.log("global state update")
  });
  return (
    <UserContext.Provider
      value={globalSettings}>
      {props.children}
    </UserContext.Provider>
  );
}
export default GlobalState;