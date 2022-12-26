import React, { Component } from 'react'
import Footer from "../Template/Footer";
import NavBar from "../Template/Navbar";
import Register from './Register';
import ContactUs from "../Template/ContactUs";

export default class RegisterPage extends Component {
  render() {
    return (
        <>
        <NavBar></NavBar> 
        <Register></Register>
        <ContactUs></ContactUs>
        <Footer></Footer>
        </>
    )
  }
}
