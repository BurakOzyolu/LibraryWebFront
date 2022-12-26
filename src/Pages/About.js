import React, { Component } from 'react'
import BookList from './BookList';
import ContactUs from "../Template/ContactUs";
import Footer from "../Template/Footer";
import NavBar from "../Template/Navbar";
import PictureLib from '../component/PictureLib';

export default class About extends Component {
  render() {
    return (
        <>
           <NavBar></NavBar> 
  {/*services start */}
  <div className="about_main">
        <div className="services_main">
          <div className="container">
            <div className="creative_taital">
                <div className="col-md-12">
              <h1 className="creative_text">Hakkımızda</h1>
              <p style={{color: '#050000'}}>
              

                1998 yılında "En yeni iletişim ve bilgisayar teknolojilerini kullanarak müşterilerine dünya standartlarında çözümler sunmak" ilkesiyle yola çıkan isimtescil.net, geçen 16 yıllık süreçte Dünya ve Türkiye’ye, en büyük domain ve hosting firmalarından biri olmayı başarmıştır.
2008 yılında alan adları standartlarını belirleyen ve denetleyen tek otorite ICANN'e akredite olan isimtescil.net, 2010 yılından beri Türkiye'nin en büyük 500 bilişim şirketi arasında yer almakta ve kurulduğu günden buyana 1 milyonun üzerinde domain kaydı ve 200 bininin üzerinde barındırma hizmetne ev sahipliği yapmıştır.</p>
</div>

<div className="col-md-12">
            <p style={{color: '#050000' }}>
            45 kişilik ekibi ile 7/24 destek operasyonunu sürdüren ve sürekli Ar-Ge politikası ile kendi altyapı yatırımlarını yöneten isimtescil.net, 
            2013 yılında Türkiye'de ilk kez yeni domain uzantıları için ön talep sürecini başlatmış ve bu süreçte 1 milyonun üzerinde talep toplayarak Afrika,
             Asya ve Doğu Avrupada en fazla talep toplayan şirket ünvanını almıştır. isimtescil.net aynı zamanda .
             uzantılarının Türkiye’deki yetkili operatörlerinden biridir. .tr uzantılı domain kaydediciler arasında en fazla işlem hacmine sahip firmadır.
             isimtescil.net tamamen kendi bünyesinde bulunan yazılım ekibi ile geliştirdiği Domain Management (Domain Yönetimi) otomasyonuna sahiptir.
              Bu otomasyon sayesinde kullanıcılarına dünya standartlarında online domain kaydetme ve tüm domain operasyonlarını web tabanlı ara yüzümüzden yönetebilme özgürlüğü sunmaktadır. 
              Aynı arayüze entegre çalışan hosting otomasyon sistemi ile hosting kullanım kolaylığı ve tek arayüzden çoklu hizmet yönetimi sağlama kabiliyetinde olan firma, 
              2010 yılında tüm barındırma altyapısını cloud (bulut) üzerine taşımış ve bu sayede mnimum maliyet/maksimum performans ölçeğini tüm müşterilerine ulaştırabilmiştir.
            </p>
            </div>
            <PictureLib></PictureLib>
              <div className="btn_main">
              </div>
            </div>    
          </div>
          </div></div>
          
          <ContactUs></ContactUs>
          <Footer></Footer>
        </>

    )
  }
}

/*
45 kişilik ekibi ile 7/24 destek operasyonunu sürdüren ve sürekli Ar-Ge politikası ile kendi altyapı yatırımlarını yöneten isimtescil.net, 2013 yılında Türkiye'de ilk kez yeni domain uzantıları için ön talep sürecini başlatmış ve bu süreçte 1 milyonun üzerinde talep toplayarak Afrika, Asya ve Doğu Avrupada en fazla talep toplayan şirket ünvanını almıştır.

isimtescil.net aynı zamanda .tr uzantılarının Türkiye’deki yetkili operatörlerinden biridir. .tr uzantılı domain kaydediciler arasında en fazla işlem hacmine sahip firmadır. isimtescil.net tamamen kendi bünyesinde bulunan yazılım ekibi ile geliştirdiği Domain Management (Domain Yönetimi) otomasyonuna sahiptir. Bu otomasyon sayesinde kullanıcılarına dünya standartlarında online domain kaydetme ve tüm domain operasyonlarını web tabanlı ara yüzümüzden yönetebilme özgürlüğü sunmaktadır. Aynı arayüze entegre çalışan hosting otomasyon sistemi ile hosting kullanım kolaylığı ve tek arayüzden çoklu hizmet yönetimi sağlama kabiliyetinde olan firma, 2010 yılında tüm barındırma altyapısını cloud (bulut) üzerine taşımış ve bu sayede mnimum maliyet/maksimum performans ölçeğini tüm müşterilerine ulaştırabilmiştir.


*/
