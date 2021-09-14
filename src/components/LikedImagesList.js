import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { removeLikedImage } from "../actions";
import Heading from "./Text/Heading";
import HorizontalRule from "./HorizontalRule";
import LikedImagesCard from "./LikedImagesCard";
import InfoMessage from "./InfoMessage";

const LikedImagesList = ({ likedImages }) => {
  const renderLikedImagesTable = () => {
    if (likedImages.length > 0) {
      return likedImages.map((ele) => {
        return (
          <LikedImagesCard
            key={ele.id}
            id={ele.id}
            img_src={ele.img_src}
            full_name={ele.camera.full_name}
            earth_date={ele.earth_date}
          />
        );
      });
    } else {
      return (
        <InfoMessage variant="dark">
          You're lookin' a little empty there!
        </InfoMessage>
      );
    }
  };

  return (
    <>
      <HorizontalRule />
      <SHeading>Liked Images</SHeading>
      {renderLikedImagesTable()}
    </>
  );
};

const SHeading = styled(Heading)`
  font-size: 1.75rem;
  margin: 10px 0 18px 0;
`;

const mapStateToProps = ({ likedImages }) => {
  return { likedImages };
};

export default connect(mapStateToProps, { removeLikedImage })(LikedImagesList);
