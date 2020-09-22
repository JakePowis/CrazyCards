import React from 'react';
import './App.css';

import Footer from './components/footer/Footer'
import Form from './components/form/Form';
import Header from './components/header/Header';
import Table from './components/table/Table';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="content">
        <div className="container">
          <Form/>
          <Table/>
        </div>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
