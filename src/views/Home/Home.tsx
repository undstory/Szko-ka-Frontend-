import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import StyledButton from "../../components/Button/Button";
import image1 from "../../assets/dave-yap-qL0953icswU-unsplash.jpg";
import image2 from "../../assets/john-towner-S5i0ovZbMRQ-unsplash.jpg";
import image3 from "../../assets/ana-curcan-aw3AoHynpbM-unsplash.jpg";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  margin-right: 100px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const StyledGridItem = styled.img`
  max-width: 300px;
  height: auto;
  margin: 20px;
  transition: transform .8s ease;

  :nth-child(2) {
    align-self: flex-end;
  }

  :hover {
    transform: scale(1.15);
  }

`;

const Home = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <Header />
        <StyledButtonContainer>
          <Link to="/random">
            <StyledButton>Random photo</StyledButton>
          </Link>
          <Link to="/gallery">
            <StyledButton>Gallery</StyledButton>
          </Link>
        </StyledButtonContainer>
      </StyledWrapper>
      <StyledGrid>
        <StyledGridItem src={image1} title="Author: Dave Yap; Photo from Unsplash.com" />
        <StyledGridItem src={image2}  title="Author: John Towner; Photo from Unsplash.com" />
        <StyledGridItem src={image3}  title="Author: Ana Curcan; Photo from Unsplash.com" />
      </StyledGrid>
    </StyledContainer>
  );
};

export default Home;
