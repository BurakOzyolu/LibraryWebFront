import React, { Component } from 'react'

export default class PictureLib extends Component {
  render() {
    return (
        <>
        <div style={{marginTop: '20px',marginBottom:'20px'}} className="section_service_2">
        <h1 className="service_text"> Resimler</h1>
        </div>
        <div class="container">
        <div class="row">
          <div class="col-sm">
          <img src={`images/libImage/libphoto1.jpg`} className="card-img-top" alt="Laptop" width="300px" height="600px" /> 
          </div>
          <div class="col-sm">
          <img src={`images/libImage/libphoto2.jpg`} className="card-img-top" alt="Laptop" width="300px" height="600px" /> 
          </div>
          <div class="col-sm">
          <img src={`images/libImage/libphoto3.jpg`} className="card-img-top" alt="Laptop" width="300px" height="600px" /> 
          </div>
        </div>
      </div>
      </>
    )
  }
}
