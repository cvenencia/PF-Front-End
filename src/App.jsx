import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Event from './routes/Event';
import NavBar from './components/common/NavBar';
import React, { useState, useEffect } from 'react'
import Footer from './components/common/Footer';
import AddEvent from './routes/AddEvent';

function App() {

  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    });
  });

  return (
    <div className='bg-[#1B1C1E] min-h-screen font-DM_Sans overflow-hidden'>
      <Router>
        <NavBar onTop={onTop} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/addevent" element={<AddEvent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
