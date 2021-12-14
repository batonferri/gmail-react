import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';


function App() {

  const sendMessageIsOpen  = useSelector(selectSendMessageIsOpen);

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
      {sendMessageIsOpen && <SendMail/>}
    </div>
  );
}

export default App;
