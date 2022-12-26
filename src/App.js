import logo from './logo.svg';
import './App.css';
import User from "./component/User";
import Navbar from "./Template/Navbar";
import UserProp from './component/UserProp';
import React from 'react';
import Users from './component/Users';
import SiteHeader from "./Template/SiteHeader";
import Footer from './Template/Footer';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import About from './Pages/About';
import Login from './Pages/Login';
import BookList from './Pages/BookList';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AdminPage from './Admin/AdminPage';
import ListSample1 from './component/ListSample1';
import AdminTypePage from './Admin/AdminPages/AdminTypePage';
import AdminWriterPage from './Admin/AdminPages/AdminWriterPage';
import AdminBookPage from './Admin/AdminPages/AdminBookPage';
import AdminStudentPage from './Admin/AdminPages/AdminStudentPage';
import AdminProcessPage from './Admin/AdminPages/AdminProcessPage';
import AdminEndProcessPage from './Admin/AdminPages/AdminEndProcessPage';

 
class App extends React.Component {
  
  
  render() {
    return (
        <div>
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
              <Route index element={ <Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/admin" element={<AdminPage></AdminPage>} />
              <Route path="/admin/book" element={<AdminBookPage></AdminBookPage>} />
              <Route path="/admin/type" element={<AdminTypePage></AdminTypePage>} />
              <Route path="/admin/writer" element={<AdminWriterPage></AdminWriterPage>} />
              <Route path="/admin/student" element={<AdminStudentPage></AdminStudentPage>} />
              <Route path="/admin/process" element={<AdminProcessPage></AdminProcessPage>} />
              <Route path="/admin/endprocess" element={<AdminEndProcessPage></AdminEndProcessPage>} />
              <Route path="/booklist" element={<ListSample1/>} />
            </Route>
            </Routes>
         </BrowserRouter>
        </div>
    );
  }

}

export default App;
