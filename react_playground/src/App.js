import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/home';
import Nurse_Page from './pages/nurse_page/nurse_page';

function App() {
  return (
    <div>
      <header>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/nurse_page">Nurse management</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nurse_page" element={<Nurse_Page />} />
      </Routes>

    </Router>
        
      </header>
    </div>

    

  );
}

export default App;
