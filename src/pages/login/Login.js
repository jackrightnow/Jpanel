import React, {useState, useContext, useEffect} from 'react';
import UserContext from '../../context/user-context';

import './Login.scss'
import Swal from 'sweetalert2';

const Login = props => {
  const uc = useContext(UserContext);
  //var bootstrap_enabled = (typeof $().modal == 'function');
  //console.log(bootstrap_enabled);
  //const [userName, setUserName] = useState("");
  //const [password, setPassword] = useState(""); 

  useEffect(()=>{
    //console.log("login updated");
    //console.log(uc);
  })

  const [values, setValues] = useState({userName:"", password:""});
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }
  const formSubmit = e => {
    e.preventDefault();
    console.log("form gönderildi");
    //console.log(uc.api_url)    
    $.ajax({
      type:'POST',
      url: uc.api_url + 'formLogin',
      data: {formData: values},
      //dataType: 'json'
    }).done(function(res){
      //console.log(res);
      try {
        let gelen = JSON.parse(res);
        console.log(gelen);
        if(gelen.code == 1){
          Swal.fire({
            type: 'error',
            title: 'Hata',
            text: gelen.sonuc,
          })
        }
        if(gelen.code == 2){
          Swal.fire({
            type: 'success',
            title: 'Giriş Başarılı',
            text: 'Yönlendiriliyorsunuz',
            showConfirmButton: false,
            allowOutsideClick: false,
            timer:1500
          })

          uc.setUserTokenId(gelen.userTokenId);
          uc.setUserData(gelen.userData);
          localStorage.setItem('userTokenId', gelen.userTokenId);
          localStorage.setItem('userData', JSON.stringify(gelen.userData));
          
          setTimeout(() => {
            props.history.push('/');
          }, 1500);
          

        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          type: 'error',
          title: 'Hata',
          text: error,
        })
      }
    })
  }
  const logContext = props => {
    console.log(uc);
    
  }


  return (      
    <div className="login-cont">
      <div className="form">
        <div className="logo">
          <img src={uc.base_url + '/public/assets/img/logo.png'} alt="" />
        </div>
        <div className="head">
          <h4>Hoşgeldiniz.</h4>
          <h6>Devam etmek için şifrenizi giriniz.</h6>
        </div>
        <div className="ctrl">
          <form action="" onSubmit={e => formSubmit(e)}>
            <div className="irow">
              <div className="ival">
                <input type="text" name="userName" 
                placeholder="Kullanıcı Adı" 
                className="form-control" 
                value={values.userName}
                onChange={e=> onChange(e)}/>
              </div>
            </div>
            <div className="irow">
              <div className="ival">
                <input type="password" name="password" 
                  placeholder="Şifre"
                  className="form-control"
                  value={values.password}
                  onChange={e=> onChange(e)}
                />
              </div>
            </div>
            <div className="irow">
              <button type="submit" className="submit-ok">Giriş Yap</button>              
            </div>
          </form>
        </div>      
      </div>
      <button onClick={logContext}>Context Log</button>
    </div>
  )
}
export default Login;
