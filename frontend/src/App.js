import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="contaner">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa!</p>
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Seu email" 
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
