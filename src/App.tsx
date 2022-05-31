import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./template/MainLayouts";
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Random from './views/Random/Random';
import Gallery from './views/Gallery/Gallery'

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/random" element={<Random />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
