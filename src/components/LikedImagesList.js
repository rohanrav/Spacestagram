import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { removeLikedImage } from "../actions";
import Heading from "./Text/Heading";
import { Table } from "react-bootstrap";
import LinkButton from "./LinkButton";

const LikedImagesList = ({ likedImages, images }) => {
  const renderLikedImagesTable = () => {
    const likedImagesList = likedImages.map((likedImg) => {
      return images.filter((img) => likedImg === img.id.toString())[0];
    });

    console.log(likedImagesList);

    return (
      <Table striped bordered hover variant="dark">
        <tbody>
          {likedImagesList.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>
                  <SImage
                    alt={`NASA Curiosity Rover Image: ${ele.id}`}
                    src={ele.img_src}
                  />
                </td>
                <td>
                  <CardTitle>{ele.camera.full_name}</CardTitle>
                  <CardDate>{ele.earth_date}</CardDate>
                  <SLinkButton>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-suit-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                    </svg>{" "}
                    Unlike
                  </SLinkButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <SHr />
      <SHeading>Liked Images</SHeading>
      {renderLikedImagesTable()}
    </>
  );
};

const SImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
`;

const SHr = styled.hr`
  background-color: #3c4650;
  opacity: 0.75;
  margin: 0 0 5px 0;

  &:not([size]) {
    height: 5px;
  }
`;

const SHeading = styled(Heading)`
  font-size: 1.75rem;
`;

const CardTitle = styled(Heading)`
  font-size: 1rem;
`;

const CardDate = styled(Heading)`
  font-size: 0.8rem;
  font-weight: 400;
`;

const SLinkButton = styled(LinkButton)`
  font-size: 0.75rem;
`;

const mapStateToProps = (state) => {
  const { likedImages, images } = state;
  return {
    likedImages,
    images,
  };
};

export default connect(mapStateToProps, { removeLikedImage })(LikedImagesList);
