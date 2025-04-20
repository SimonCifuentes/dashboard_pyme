import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Detalle from './Detalle';
import Clientes from './Clientes';
import Configuracion from './Configuracion';
import Login from './Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<App />} />
      <Route path="/detalle" element={<Detalle />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/configuracion" element={<Configuracion />} />
    </Routes>
  </BrowserRouter>
);
