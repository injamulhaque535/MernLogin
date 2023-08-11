import React from 'react';
import {BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import "./css/login-signup.css";
import "./css/Contact.css";
import "./css/About.css";
import "./css/Error.css";
import "./css/Home.css";

export const App = () => {
  return (
  <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}


export default App;
