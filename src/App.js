import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import NotFound from './components/NotFound';
import { Navbar, Footer } from './components';
import { Services } from './components/Services/Services';
import { ContactSection } from './components/Forms/ContactSection';
import { JobApplicationSection } from './components';

// styles
import { GlobalStyle } from './GlobalStyle';


const App = () => {
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<ContactSection/>} />
        <Route path='/apply' element={<JobApplicationSection/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  </>)
  };

export default App;
