import styled from "styled-components";
import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import Heading from "./Text/Heading";
import HorizontalRule from "./HorizontalRule";
import theme from "../theme/theme";

const Footer = () => {
  return (
    <ParentDiv>
      <Container style={{ position: "relative", top: "25%" }}>
        <Row style={{ margin: "auto" }}>
          <Col md={8}>
            <SHeading>Spacestagram</SHeading>
            <SText>
              Spacestagram gives you the ability to discover aliens! See the
              latest photos from the NASA Curiosity Rover, and like your
              favourites!
            </SText>
          </Col>
          <Col md={4}>
            <LearnMoreLink href="https://github.com/rohanrav">
              Learn More
            </LearnMoreLink>
            <HorizontalRule color="#f5f5f5" height="2px" />
            <SText>
              Hey! I'm Rohan and I love to build new things! I would love to
              work at Shopify ❤️
            </SText>
          </Col>
        </Row>
      </Container>
    </ParentDiv>
  );
};

const LearnMoreLink = styled.a`
  font-family: ${theme.font.header};
  text-decoration: none;
  color: ${theme.color.defaultText};
  transition: 0.2s;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

const ParentDiv = styled.div`
  background-color: #3c4650;
  height: 200px;
`;

const SHeading = styled(Heading)`
  display: inline;
  font-size: 2rem;
`;

const SText = styled(Heading)`
  font-size: 18px;
  font-weight: 400;
`;

export default Footer;
