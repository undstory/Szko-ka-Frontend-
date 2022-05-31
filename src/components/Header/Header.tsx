import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: ${({ theme }) => theme.headerSize};
  color: ${({ theme }) => theme.white};
  letter-spacing: 1px;
`;

const Header = () => {
  return (
    <StyledHeader>UNSPLASH GALLERY</StyledHeader>
  )
}

export default Header