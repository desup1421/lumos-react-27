import React from 'react';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className='min-vh-100'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
