import React, { Component } from 'react'
import Footer from "../Template/Footer";
import NavBar from "../Template/Navbar";
import Login from './Login';
import ContactUs from "../Template/ContactUs";

export default class LoginPage extends Component {
  render() {
    return (
        <>
        <NavBar></NavBar> 
        <Login></Login>
        <ContactUs></ContactUs>
        <Footer></Footer>
        </>

    )
  }
}
