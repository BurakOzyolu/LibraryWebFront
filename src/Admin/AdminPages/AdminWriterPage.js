import React, { Component } from 'react'
import Footer from '../../Template/Footer'
import NavBar from '../../Template/Navbar'
import AccessDenied from '../AccessDenied'
import AdminFooter from '../AdminFooter'
import AdminHeader from '../AdminHeader'
import AdminTypeList from '../AdminTypeList'
import AdminWriterList from '../AdminWriterList'

const userName =localStorage.getItem("admin");

export default class AdminWriterPage extends Component {
  render() {
    if(userName == "admingiris") {
        return (
        <>
      <AdminHeader></AdminHeader>
      <AdminWriterList></AdminWriterList>
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
