import React, { Component } from 'react'




export default class Register extends Component {
  render() {
    return (
        <div>
        <div className="touch_section">
          <div className="container">
            <h1 className="touch_text">Kayıt Ol</h1>
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
                        <input type="text" className="email-bt" placeholder="Kullanici Adi" name="Name" />
                      </div>
                      <div className="form-group">
                        <input type="password" className="email-bt" placeholder="Şifre" name="Password" />
                      </div>
                      <div className="form-group">
                        <input type="password" className="email-bt" placeholder="Şifre" name="Password" />
                      </div>
                      <div className="form-group">
                        <input type="password" className="email-bt" placeholder="Şifre" name="Password" />
                      </div>                                            
                    </form>
                  </div> 
                  <div className="send_btn">
                    <button type="button" className="main_bt"><a href="#">Kayıt Ol</a></button>
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
}
