import React, { Component,useState } from 'react'
import axios from 'axios';
import { Link,redirect,useNavigate } from "react-router-dom";
import { variables } from '../Admin/Variable';

 function Login() {


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSave = (e) => {
      e.preventDefault();
      console.log(userName,password);
    }

    const handleLogin = (e) => {
      e.preventDefault();
        const data = {
            UserName : userName,
            Password : password
        }
        const url = variables.API_URL+  'Account/login';
        axios.post(url,data)
        .then((result)=> {
          const dt = result.data;
          if(dt.statusCode === 200){
            localStorage.setItem("admin", "admingiris");
            console.log(dt)
            navigate('/admin');
          }
          else{
            localStorage.setItem("admin", "girmedi");
            alert("Kullanıcı adı veya şifre yanlış")
            console.log(dt)
          }
        })
        .catch((error)=>{
          console.log(error);
        })
    }
    return (
      <div>
      <div className="touch_section">
        <div className="container">
          <h1 className="touch_text">Giriş Yap</h1>
        </div>
      </div>
      <div className="lets_touch_main">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="input_main">
                <div className="container">
                  <form action="/action_page.php">
                    <div className="form-group">
                      <input type="text" 
                      className="email-bt" 
                      placeholder="Kullanici Adi" 
                      onChange={(e)=> setUserName(e.target.value)}
                      name="Name" />
                    </div>
                    <div className="form-group">
                      <input type="password" 
                      className="email-bt" 
                      placeholder="Şifre" 
                      onChange={(e)=> setPassword(e.target.value)}
                      name="Password" />
                    </div>
                  </form>
                </div> 
                <div className="send_btn">
                  <button type="submit" className="btn btn-primary btn-lg" onClick={(e)=> handleLogin(e)}>Giriş</button>
                </div>                   
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12">
                <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web</p>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Login;

/*

                    <div className="form-group">
                      <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="text" defaultValue={""} />
                    </div>

                    const url='https://localhost:44314'
                    const data = {
                      Name:name,
                      Email : email
                    }
                    axios.post(url,data)
                    .then((result) => {
                      const dt = result.data;
                    })
                    .catch((error)=> {
                      console.log(error);
                    })

                    const handleLogin = () => {
                      window.location.url = "/login"
                    }


*/