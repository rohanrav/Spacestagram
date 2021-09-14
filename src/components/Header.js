import React from "react";
import styled from "styled-components";

import Heading from "./Text/Heading";

import ufo from "../assets/ufo.png";

const Header = () => {
  return (
    <SHeader>
      <SHeading>Spacestagram</SHeading>
      <UFOImage src={ufo} />
      <SText>
        Do you think aliens exist? Discover them for yourself from the Curiosity
        Rover's photos!
      </SText>
    </SHeader>
  );
};

const SHeader = styled.div`
  ${({ theme }) => `
        margin-top: 50px;
    `}
`;

const SHeading = styled(Heading)`
  display: inline;
  font-size: 2.5rem;
`;

const SText = styled(Heading)`
  font-size: 18px;
  font-weight: 400;
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
