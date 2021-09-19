import React from "react";
import styled from "styled-components";

import Heading from "./Text/Heading";

import ufo from "../assets/ufo.png";
import theme from "../theme/theme";

const Header = () => {
  return (
    <SHeader>
      <LogoText>Spacestagram</LogoText>
      <UFOImage src={ufo} />
      <DescriptionText>
        Do you think aliens exist? Discover them for yourself from the Curiosity
        Rover's photos!
      </DescriptionText>
    </SHeader>
  );
};

const SHeader = styled.div`
  margin-top: 50px;

  @media ${theme.media["mobile"]} {
    margin-top: 25px;
    text-align: center;
  }
`;

const LogoText = styled(Heading)`
  display: inline;
  font-size: 2.5rem;

  @media ${theme.media["mobile"]} {
    font-size: 2.1rem;
  }
`;

const DescriptionText = styled(Heading)`
  font-size: 18px;
  font-weight: 400;

  @media ${theme.media["mobile"]} {
    font-weight: 300;
  }
`;

const UFOImage = styled.img`
  height: 55px;
  margin: 0 0 12.5px 15px;
  animation: myOrbit 2s linear infinite;

  @keyframes myOrbit {
    from {
      transform: rotate(0deg) translateX(5px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(5px) rotate(-360deg);
    }
  }
`;

export default Header;
