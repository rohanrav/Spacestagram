import React from "react";
import styled from "styled-components";

const ModalBody = ({ imgSrc, alt }) => {
  return <SModalImage src={imgSrc} alt={alt} />;
};

const SModalImage = styled.img`
  width: 100%;
`;

export default ModalBody;
