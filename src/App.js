import React from "react";
import styled from "styled-components";

import { Row, Col, Container } from "react-bootstrap";

import Header from "./components/Header";
import ImageList from "./components/ImageList";

import backgroundImage from "./assets/background.svg";

const App = () => {
  return (
    <ParentDiv>
      <Layout>
        <Container>
          <Row>
            <Header />
            <Col md={8}>
              <ImageList />
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </Layout>
    </ParentDiv>
  );
};

const ParentDiv = styled.div`
  min-height: 100vh;
`;

const Layout = styled.div`
  background: url(${backgroundImage});
  background-position: center;
  min-height: 100vh;
`;

export default App;

// https://loading.io/pattern/i-nz27g4/
// https://www.flaticon.com/free-icon/ufo_214358
