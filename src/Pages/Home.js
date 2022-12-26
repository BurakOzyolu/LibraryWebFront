import React, { Component } from 'react'
import Banner from '../Template/Banner';
import Services from './Services';
import ContactUs from "../Template/ContactUs";
import Footer from "../Template/Footer";
import NavBar from "../Template/Navbar";
import ListSample1 from '../component/ListSample1';
import PictureLib from '../component/PictureLib';

 class Home extends Component {
  render() {
    return (
      <>
            <NavBar></NavBar> 
            <Banner></Banner>
            <Services></Services>
            <PictureLib></PictureLib>
            <ContactUs></ContactUs>
            <Footer></Footer>
      </>

    )
  }
}

  export default Home;
  
