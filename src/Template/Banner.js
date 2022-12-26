import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
        <div className="banner-main">
        <div className="container">
          <div id="main_slider" className="carousel slide" data-ride="carousel">  
            {/* The slideshow */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="titlepage-h1">
                  <h1 className="bnner_title">Kütüphane Web Sitemize<br />
                    <span style={{color: '#10b5fa'}}>Hoş Gelidiniz</span></h1>
                  <p className="long_text">Kütüphanemiz hakkında bilgi alabilir, kayıt olabilir ve kitap alabilirsiniz. </p>
                </div>
                <div className="btn_main">
                  <button type="button" className="btn btn-dark btn-lg"><a href="/">Ana Sayfa</a></button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="titlepage-h1">
                  <h1 className="bnner_title">Kütüphanemiz<br />
                    <span style={{color: '#10b5fa'}}>Hakkında</span></h1>
                  <p className="long_text">Kütüphanemizin tarihçesi hakkında bilgi almak istiyorsanız buraya tıklayın </p>
                </div>
                <div className="btn_main">
                  <button type="button" className="btn btn-dark btn-lg"><a href="/about">Hakkımızda</a></button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="titlepage-h1">
                  <h1 className="bnner_title">Kitaplarımızı<br />
                    <span style={{color: '#10b5fa'}}>Görüntüleyin</span></h1>
                  <p className="long_text">Kütüphanemizde bulunan kitapları görüntüleyebilirsiniz </p>
                </div>
                <div className="btn_main">
                  <button type="button" className="btn btn-dark btn-lg"><a href="/booklist">Kitapalar Listesi</a></button>
                </div>
              </div>
            </div> 
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
              <i className="fa fa-angle-left" />
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="prev">
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
