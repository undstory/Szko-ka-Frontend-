import React from "react";
import { useState } from "react";
import styled from "styled-components";
import GalleryModal from "../Modal/GalleryModal";
import { ResponseData } from "../../models/model";

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 10px;
  position: relative;
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
  cursor: pointer;
`;

const Images: React.FC<{ result: any }> = (props) => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ResponseData | null>(null);
  const photos = props.result;

  const handleModal = () => {
    setModal(true);
  };

  const handleModalData = (data: ResponseData) => {
    setModalData(data)
  }

  const pictures = photos.map((photo: ResponseData) => (
<StyledCard>
                <StyledImg
                  key={photo.id}
                  src={photo.urls.small}
                  onClick={() => {handleModal(); handleModalData(photo)}}
                  alt={photo.alt_description}
                  title={photo.alt_description}
                />
                <StyledSpan>Author: {photo.user.name}</StyledSpan>
                <StyledSpan>Likes: {photo.likes} </StyledSpan>
              </StyledCard>
  ) );

  return (
    <>
      <StyledWrapper>
        {pictures}
              {modal && (
                <GalleryModal
                  setModal={setModal}
                modalData={modalData}
                />
              )}

      </StyledWrapper>
    </>
  );
};

export default Images;
