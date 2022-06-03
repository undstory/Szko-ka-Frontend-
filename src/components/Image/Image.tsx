import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import { ResponseData } from "../../models/model";

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

const StyledImg = styled.img`
  cursor: pointer;
`;

interface Props {
  result: ResponseData
}

const Image: React.FC<Props> = ({result})=> {
  const [modal, setModal] = useState<boolean>(false)

  const photo = result;
  const { likes, urls, user, alt_description } = photo;

  const handleModal = () =>  {
    setModal(true)
  }

  const biggerImage = urls.regular;
  const userName = user.name.toUpperCase();

  return (
    <>
      <StyledWrapper>
      <StyledImg
        src={urls.small}
        alt={alt_description}
        title={alt_description}
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
