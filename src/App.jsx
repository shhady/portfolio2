import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Social from './components/socialMedia/Social';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Social />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more Route components for other pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
