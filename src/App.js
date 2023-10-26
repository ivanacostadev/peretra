import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/common/screens/Home';
import SignUpForm from './components/User/Signup';
import RegistroControlLiquidos from './components/system/Dialisis/ControlLiquidos';
import Login from './components/User/Login';
import Sidebar from './components/common/navigation/SideBar';




function App() {

  return (

<BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route  path="/signup" element={<SignUpForm/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/controlliquidos" element={<RegistroControlLiquidos/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
