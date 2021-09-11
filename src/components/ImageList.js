import React from "react";
import styled from "styled-components";

import ImageCard from "./ImageCard"; // pass in src, key, desciprtion, date, title --> need to modify to support updated card

const ImageList = () => {
  return <SImageList>ImageList</SImageList>;
};

const SImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
`;

export default ImageList;
