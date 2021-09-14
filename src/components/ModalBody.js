import React from "react";
import styled from "styled-components";

const ModalBody = ({ imgSrc }) => {
  return <SModalImage src={imgSrc} />;
};

const SModalImage = styled.img`
  width: 100%;
`;

export default ModalBody;
