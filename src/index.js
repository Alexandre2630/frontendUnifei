import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './components/Principal';
import Menu from './components/Menu';
import IMC from './components/IMC';
import Unidades from './components/Unidades';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="IMC" element={<IMC />} />
      <Route path="Unidades" element={<Unidades/>} />
    
    </Routes>
  </BrowserRouter>
  );
