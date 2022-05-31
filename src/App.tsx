import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./template/MainLayouts";
import Home from "./views/Home/Home";
import Random from "./views/Random/Random";
import Gallery from "./views/Gallery/Gallery";
import styled from "styled-components";

const StyledMainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

function App() {
  return (
    <MainLayout>
      <StyledMainWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/random" element={<Random />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
          </Routes>
        </BrowserRouter>
      </StyledMainWrapper>
    </MainLayout>
  );
}

export default App;
