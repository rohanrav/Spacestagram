import React from "react";
import styled from "styled-components";

import { Row, Col, Container } from "react-bootstrap";

import Header from "./components/Header";
import ImageList from "./components/ImageList";
import LikedImagesList from "./components/LikedImagesList";
import Footer from "./components/Footer";

import backgroundImage from "./assets/background.svg";

const App = () => {
  return (
    <ParentDiv>
      <SContainer>
        <Row>
          <Header />
          <Col md={8}>
            <ImageList />
          </Col>
          <ScrollableCol md={4}>
            <LikedImagesList />
          </ScrollableCol>
        </Row>
      </SContainer>
      <Footer />
    </ParentDiv>
  );
};

const SContainer = styled(Container)`
  min-height: 100vh;
`;

const ScrollableCol = styled(Col)`
  position: sticky;
  top: 20px;
  height: fit-content;
  max-height: 95vh;
  overflow-y: scroll;
  margin-bottom: 20px;
`;

const ParentDiv = styled.div`
  background: url(${backgroundImage});
  background-position: center;
`;

export default App;
