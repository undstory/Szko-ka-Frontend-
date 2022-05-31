import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import Image from "../../components/Image/Image";
import { API_URL_RANDOM } from "../../api/api";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import StyledButton from "../../components/Button/Button";

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

const Random = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState();
  const [isFetching, setIsFetching] = useState(true);

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
      <Form setQuery={setQuery} />
      <StyledImageWrapper>
        {!isFetching && <Image result={result} />}
      </StyledImageWrapper>
    </>
  );
};

export default Random;
