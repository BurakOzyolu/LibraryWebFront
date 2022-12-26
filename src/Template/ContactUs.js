import React, { Component } from 'react'

export default class ContactUs extends Component {
  render() {
    return (
        <div className="contact_main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="touch_text">Contact Us</h1>
            </div>
          </div>
        </div>
        <div className="contact_section_2">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="map_icon">
                  <img src="images/map-icon.png" style={{maxWidth: '100%', paddingLeft: '30px'}} />
                  <p className="email-text"><a href="#">İstanbul - Maltepe<br />Türkiye</a></p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="map_icon">
                  <img src="images/call-icon.png" style={{maxWidth: '100%', paddingLeft: '30px'}} />
                  <p className="email-text"><a href="#">+905554443322</a></p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="map_icon">
                  <img src="images/email-icon.png" style={{maxWidth: '100%', paddingLeft: '30px'}} />
                  <p className="email-text"><a href="#">kutuphanem@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
