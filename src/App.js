import React from "react";
import styled from "styled-components";

import { Row, Col, Container } from "react-bootstrap";

import Header from "./components/Header";
import ImageList from "./components/ImageList";
import LikedImagesList from "./components/LikedImagesList";
import Footer from "./components/Footer";
import theme from "./theme/theme";

import backgroundImage from "./assets/background.svg";

const App = () => {
  return (
    <Wrapper>
      <MainContentContainer>
        <Row>
          <Header />
          <Col md={8}>
            <ImageList />
          </Col>
          <ScrollableColumn md={4}>
            <LikedImagesList />
          </ScrollableColumn>
        </Row>
      </MainContentContainer>
      <Footer />
    </Wrapper>
  );
};

const MainContentContainer = styled(Container)`
  min-height: 100vh;

  @media ${theme.media["mobile"]} {
    padding: 15px 30px;
  }
`;

const ScrollableColumn = styled(Col)`
  position: sticky;
  top: 20px;
  height: fit-content;
  max-height: 95vh;
  overflow-y: scroll;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  background: url(${backgroundImage});
  background-position: center;
`;

export default App;
