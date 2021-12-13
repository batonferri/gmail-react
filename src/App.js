import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Routes>
          <Route  exact path="/mail" element={<Mail/>}/>
          <Route exact path="/"element={<EmailList/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
