import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Random from './views/Random/Random';
import Search from './views/Search/Search'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/random" element={<Random />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
