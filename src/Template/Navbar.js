import React from 'react'
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return (
    
     <div>
        <div className="header_main">
          <div className="container">
            <div className="logo"><a href="/"></a></div>
          </div>
        </div>
        <div className="header">
          <div className="container">
            {/*  header inner */}
            <div className="col-sm-12">
              <div className="menu-area">
                <nav className="navbar navbar-expand-lg ">
                  {/* <a class="navbar-brand" href="#">Menu</a> */}
                  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="/">ANA SAYFA<span className="sr-only">(current)</span></a> </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about">HAKKIMIZDA</a></li>
                        <li className="nav-item">
                        <a className="nav-link" href="/booklist">KİTAPLAR LİSTESİ</a></li>
                        <li className="nav-item">
                        <a className="nav-link " href="/login" style={{textAlign: 'center'}}> GİRİŞ</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div> 
        </div>
      </div>
      
    )
}

export default NavBar


/*
<Link to="/blogs">Blogs</Link>
<Link to="/">Ana Sayfa</Link>
<Link to="/contact">Contact</Link>
*/
