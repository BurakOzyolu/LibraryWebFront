import React, { Component } from 'react'
import Footer from '../../Template/Footer'
import NavBar from '../../Template/Navbar'
import AccessDenied from '../AccessDenied'
import AdminBookList from '../AdminBookList'
import AdminFooter from '../AdminFooter'
import AdminHeader from '../AdminHeader'

const userName =localStorage.getItem("admin");

export default class AdminBookPage extends Component {
  render() {
    if(userName == "admingiris") {
        return (
        <>
      <AdminHeader></AdminHeader>
      <AdminBookList></AdminBookList>
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
