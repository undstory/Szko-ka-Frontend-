import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 290px;
   margin: 0 1rem 1rem;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.white};
  display: inline-block;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.textSize};
`;

const StyledImg = styled.img`
height: 500px;
   object-fit: cover;
`;

const Image: React.FC<{ result: any }> = (props) => {
  const photos = props.result;
  console.log(photos);
  return (
    <StyledWrapper>
      {photos.map((el: any) => {
        return (
        <StyledCard>
            <StyledImg key={el.id} src={el.urls.regular} alt={el.alt_description} title={el.alt_description} />
            <StyledSpan>Author: {el.user.name}</StyledSpan>
            <StyledSpan>Likes: {el.likes} </StyledSpan>
        </StyledCard>
        )

      })}
    </StyledWrapper>
  );
};

export default Image;
