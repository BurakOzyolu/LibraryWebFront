import React, { Component } from 'react'
import Footer from '../../Template/Footer'
import NavBar from '../../Template/Navbar'
import AccessDenied from '../AccessDenied'
import AdminFooter from '../AdminFooter'
import AdminHeader from '../AdminHeader'
import AdminTypeList from '../AdminTypeList'

const userName =localStorage.getItem("admin");

export default class AdminTypePage extends Component {
  render() {
    if(userName == "admingiris") {
        return (
        <>
      <AdminHeader></AdminHeader>
      <AdminTypeList></AdminTypeList>
      <AdminFooter></AdminFooter>
        </>
        )
    }
    else {
        return (
            <>
            <NavBar></NavBar> 
            <AccessDenied></AccessDenied>
            <Footer></Footer>
            </>
        )
    }
  }
}
