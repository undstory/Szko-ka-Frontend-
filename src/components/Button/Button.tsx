
import styled from 'styled-components';


const StyledButton = styled.button`
  width: 200px;
  padding: 10px 30px;
  margin-right: 20px;
  border-radius: 5px;
  border: 2px solid white;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.textSize};
  transition: background-color 0.8s ease;

  :hover {
    background-color: transparent;
    color: ${({ theme }) => theme.white};
  }

`;



export default StyledButton