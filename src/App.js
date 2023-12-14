import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation';
import './style.scss';
import './mediaquery.scss';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
