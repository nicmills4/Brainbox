import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Tutorial from './pages/tutorial';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' exact element={<Home />} />
      <Route exact path='/about' exact element={<About />} />
      <Route exact path='/contact' exact element={<Contact />} />
      <Route exact path='/tutorial' exact element={<Tutorial />} />
      <Route exact path='/sign-up' exact element={<SignUp />} />
    </Routes>
    </Router>
  );
}

export default App;
