import React from "react";
import styled from "styled-components";

import theme from "../theme/theme";
import ufo from "../assets/ufo.png";

import { Row, Col, Container } from "react-bootstrap";
import Heading from "./Text/Heading";
import HorizontalRule from "./HorizontalRule";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container style={{ position: "relative", top: "25%" }}>
        <Row style={{ margin: "auto" }}>
          <Col md={8}>
            <LogoText>Spacestagram</LogoText>
            <UFOImage src={ufo} />
            <DescriptionText>
              Spacestagram gives you the ability to discover aliens! See the
              latest photos from the NASA Curiosity Rover, and like your
              favourites!
            </DescriptionText>
          </Col>
          <Col md={4}>
            <LearnMoreLink href="https://github.com/rohanrav">
              Learn More
            </LearnMoreLink>
            <HorizontalRule
              style={{ marginBottom: "12.5px" }}
              color={theme.color.accent}
              height="2px"
            />
            <DescriptionText>
              Hey! I'm Rohan, and I love to code new things and watch The
              Office! I would really love to work at Shopify :)
            </DescriptionText>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
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

const FooterWrapper = styled.div`
  background-color: ${theme.color.primary};
  height: 200px;

  @media ${theme.media["tablet"]} {
    height: fit-content;
    padding: 40px;
  }

  @media ${theme.media["mobile"]} {
    height: fit-content;
    padding: 40px 20px;
    text-align: center;
  }
`;

const LogoText = styled(Heading)`
  display: inline;
  font-size: 2rem;

  @media ${theme.media["mobile"]} {
    font-size: 1.75rem;
  }
`;

const DescriptionText = styled(Heading)`
  font-size: 16px;
  font-weight: 300;
`;

const UFOImage = styled.img`
  height: 45px;
  margin: 0 0 10px 15px;
`;

export default Footer;
