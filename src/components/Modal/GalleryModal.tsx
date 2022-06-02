import styled from "styled-components";

const StyledModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  justify-content: center;
  z-index: 333;
  max-width: 800px;
  height: auto;
  box-shadow: 0px 0px 40px -11px rgba(0, 0, 0, 1);
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const StyledInfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.black};
`;

const StyledInfoText = styled.span`
  font-size: ${({ theme }) => theme.textSize};
  display: inline-block;
  margin-left: 20px;
  font-weight: bold;
`;

const StyledButtonClose = styled.button`
  width: 35px;
  height: 35px;
  font-size: 30px;
  border: none;
  outline: none;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => theme.black};
  margin-right: 10px;
`;

const Modal: React.FC<{
  setModal: any;
  photo?: any;
}> = (props) => {
  const photo = props.photo;

  console.log(photo);


  const handleCloseModal = () => {
    props.setModal(false);
  };

  return (
<>



          <StyledModalContainer>
            <StyledInfoWrapper>
              <StyledInfoText>Author: </StyledInfoText>
              <StyledButtonClose onClick={() => handleCloseModal()}>
                x
              </StyledButtonClose>
            </StyledInfoWrapper>
            <StyledImg alt="" />
            </StyledModalContainer>



</>
  );
};

export default Modal;
