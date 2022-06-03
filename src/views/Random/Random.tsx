import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import Image from "../../components/Image/Image";
import { API_URL_RANDOM } from "../../api/api";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import StyledButton from "../../components/Button/Button";
import Subheader from "../../components/Header/Subheader";
// import { ResponseData } from "../../models/model";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px;
`;

const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.white};
    margin-top: 20px;
    letter-spacing: 1px;
`;

const Random = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<any>({});
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    if (query) {
      axios
        .get(API_URL_RANDOM, {
          params: {
            query: query,
            page: 1,
          },
        })
        .then((data) => {
          setResult(data.data);
          setIsFetching(false);
        });
    }
  }, [query]);

  return (
    <>
      <StyledNavbar>
        <Header />
        <Link to="/">
          <StyledButton>Back to home</StyledButton>
        </Link>
      </StyledNavbar>
      <Subheader>Random photo</Subheader>
      <Form setQuery={setQuery} />
      <StyledParagraph>Tips: If you click on the picture - you will see it bigger</StyledParagraph>
      <StyledImageWrapper>
        {!isFetching && <Image result={result} />}
      </StyledImageWrapper>
    </>
  );
};

export default Random;
