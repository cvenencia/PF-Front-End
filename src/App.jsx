import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Event from './routes/Event';
import NavBar from './components/common/NavBar';
import React, { useState, useEffect } from 'react'
import Footer from './components/common/Footer';
import AddEvent from './routes/AddEvent';
import { UserProvider } from './contexts/UserContext';
import { EventProvider } from './contexts/EventContext';

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
    <UserProvider>
      <EventProvider>
        <div className='bg-[#1B1C1E] min-h-screen font-DM_Sans overflow-hidden flex flex-col overflow-y-scroll pr-10 scrollbar-thin scrollbar-thumb-[#424242] scrollbar-track-[#C0C0C0] scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
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
      </EventProvider>
    </UserProvider>
  );
}

export default App;
