import React from "react";
import { useState } from "react";
import styled from "styled-components";
import GalleryModal from "../Modal/GalleryModal";

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 10px;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap; */
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
   width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.3s;
`;

const Image: React.FC<{ result: any }> = (props) => {
  const [modal, setModal] = useState(false);

  const photos = props.result;

  const handleModal = () => {
    setModal(true);

  };

  return (
    <>
      <StyledWrapper>
        {photos.map((photo: any) => {
          return (
            <>
              <StyledCard>
                <StyledImg
                  key={photo.id}
                  src={photo.urls.small}
                  onClick={() => handleModal()}
                  alt={photo.alt_description}
                  title={photo.alt_description}
                />
                <StyledSpan>Author: {photo.user.name}</StyledSpan>
                <StyledSpan>Likes: {photo.likes} </StyledSpan>
              </StyledCard>
              {modal && (
                <GalleryModal
                  setModal={setModal}
                  photo={photo.urls}
                />
              )}
            </>
          );
        })}
      </StyledWrapper>
    </>
  );
};

export default Image;
