import React, { Component } from 'react'
import Footer from '../../Template/Footer'
import NavBar from '../../Template/Navbar'
import AccessDenied from '../AccessDenied'
import AdminFooter from '../AdminFooter'
import AdminHeader from '../AdminHeader'
import AdminProcessList from '../AdminProcessList'

const userName =localStorage.getItem("admin");

export default class AdminProcessPage extends Component {
  render() {
    if(userName == "admingiris") {
        return (
        <>
      <AdminHeader></AdminHeader>
    <AdminProcessList></AdminProcessList>
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
