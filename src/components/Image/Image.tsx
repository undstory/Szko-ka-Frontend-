import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.white};
  display: inline-block;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.textSize};
`;

const Image: React.FC<{ result: any }> = (props) => {
  //typuje właściwości obiektu props
  const photo = props.result;
  const { likes, urls, user } = photo;
  console.log();
  return (
    <StyledWrapper>
      <img
        src={urls.small}
        alt={photo.alt_description}
        title={photo.alt_description}
      />

        <StyledSpan>Author: {user.name}</StyledSpan>
        <StyledSpan>Likes: {likes} </StyledSpan>

    </StyledWrapper>
  );
};

export default Image;
