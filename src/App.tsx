import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:user" element={<Profile />} />
        <Route path="/:user/:repo" element={<Repo />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
