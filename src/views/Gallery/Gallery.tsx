import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import Images from "../../components/Images/Images";
import { API_URL_GALLERY } from "../../api/api";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import StyledButton from "../../components/Button/Button";
import Subheader from "../../components/Header/Subheader";

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

const Gallery = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (query) {
      axios
        .get(API_URL_GALLERY, {
          params: {
            query: query,
            page: 1,
            per_page: 12
          },
        })
        .then((data) => {
          setResult(data.data.results);
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
      <Subheader>Gallery</Subheader>
      <Form setQuery={setQuery} />
      <StyledImageWrapper>
        {!isFetching && <Images result={result} />}
      </StyledImageWrapper>
    </>
  );
};

export default Gallery;
