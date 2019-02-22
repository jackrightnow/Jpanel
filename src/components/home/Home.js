import React, {Component} from 'react';

import { UserContext } from '../../context/user-context';

function Hosgeldiniz(props){
  return(
    <UserContext.Consumer>
      {(context)=>(
        <div>Hoşgeldiniz {context.ad}</div>
      )}
    </UserContext.Consumer>
  )
}

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    
  }
  render(){
    return(
      <div>
        <div>Anasayfa Yüklendi</div>
        <div className="ad">
          <Hosgeldiniz />
        </div>
      </div>
    )
  }
}
export default Home;

