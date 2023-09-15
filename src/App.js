import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { Box } from '@chakra-ui/react';
import { Navbar, Sidebar, Footer } from './components';
import { Home } from './pages';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        w={'full'}
        minH={'calc(100vh - 150px - 200px)'}
        px={['2rem', null, '6rem']}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
