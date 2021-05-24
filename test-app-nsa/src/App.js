import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar.js'
import Content from './Content.js'


function App() {
  return (
    <Router >
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Content />
    </div>
    </Router>
  );
}

export default App;
