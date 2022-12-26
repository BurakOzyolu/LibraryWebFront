import React, { Component } from 'react'
import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'
import Footer from "../Template/Footer";
import NavBar from "../Template/Navbar";
import AccessDenied from './AccessDenied';
import AdminBookList from './AdminBookList';
import AdminStudentList from './AdminStudentList';
import AdminTypeList from './AdminTypeList';
import AdminWriterList from './AdminWriterList';


const userName =localStorage.getItem("admin");
var adminpage =localStorage.getItem("adminpage");
var page;



export default class AdminPage extends Component {
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

  /**/
  