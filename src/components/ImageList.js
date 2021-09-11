import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import format from "date-fns/format";
import subDays from "date-fns/subDays";

import { fetchImages } from "../actions";

import ImageCard from "./ImageCard";

const ImageList = ({ fetchImages, images }) => {
  useEffect(() => {
    fetchImages(format(subDays(new Date(), 3), "yyyy-MM-dd"));
  }, [fetchImages]);

  const renderedImages = images.map((ele) => (
    <ImageCard key={ele.id} image={ele} />
  ));
  return <SImageList>{renderedImages}</SImageList>;
};

const SImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
`;

const mapStateToProps = (state) => {
  return { images: state.images };
};

export default connect(mapStateToProps, { fetchImages })(ImageList);
