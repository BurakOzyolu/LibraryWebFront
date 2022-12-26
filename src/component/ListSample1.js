import React, { Component } from 'react'
import BookList from '../Pages/BookList'
import Footer from '../Template/Footer'
import Bookcard from './Bookcard'
import NavBar from '../Template/Navbar'

export default class ListSample1 extends Component {
  render() {
    return (
        <>
        <NavBar></NavBar>
        <div style={{marginTop: '40px'}} className="section_service_2">
          <h1 className="service_text">Kitaplar Listesi</h1>
        </div>
        <div style={{marginBottom: '40px'}}></div>
        <section style={{backgroundColor: '#eee'}}>
        <div className="container py-5">
          <div className="row">
        <BookList></BookList>            
           
          </div>
        </div>
      </section>
      <Footer></Footer>
      </>
    )
  }
}
