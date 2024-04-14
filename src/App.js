import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';
import Due from './Pages/Due';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/due' element={<Due/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;