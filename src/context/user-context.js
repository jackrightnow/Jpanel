import React from 'react';

export default React.createContext({
  userTokenId: 0,
  userData: {userName:"ugur baba"},
  setUserData: data => {},
  setUserTokenId: tokenId => {}
});


