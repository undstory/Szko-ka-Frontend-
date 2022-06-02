import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.white};
  display: inline-block;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.textSize};
`;

const Image: React.FC<{ result: any }> = (props) => {
  //typuje właściwości obiektu props
  const [modal, setModal] = useState(false)

  const photo = props.result;
  const { likes, urls, user } = photo;

  const handleModal = () =>  {
    setModal(true)
  }

  const biggerImage = urls.regular;
  const userName = user.name.toUpperCase();

  return (
    <>
      <StyledWrapper>
      <img
        src={urls.small}
        alt={photo.alt_description}
        title={photo.alt_description}
        onClick={() => handleModal()}
      />

        <StyledSpan>Author: {userName}</StyledSpan>
        <StyledSpan>Likes: {likes} </StyledSpan>

    </StyledWrapper>
    {modal && <Modal setModal={setModal} biggerImage={biggerImage} userName={userName} /> }

    </>

  );
};

export default Image;
