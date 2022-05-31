import styled from "styled-components";

const StyledInput = styled.input`
  width: 300px;
  background-color:  ${({ theme}) => theme.grey};
  padding: 10px 30px;
  margin-right: 20px;
  color: ${({ theme}) => theme.white};
  border-radius: 5px;
  border: 2px solid ${({ theme}) => theme.grey};
  margin-top: 20px;
  font-size: ${({ theme }) => theme.textSize};
`;

export default StyledInput