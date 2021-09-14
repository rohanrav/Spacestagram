import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { removeLikedImage } from "../actions";
import Heading from "./Text/Heading";
import LinkButton from "./LinkButton";
import { Col, Row } from "react-bootstrap";
import ImageModalView from "./ImageModalView";
import ModalBody from "./ModalBody";

const LikedImagesCard = ({
  id,
  img_src,
  full_name,
  earth_date,
  removeLikedImage,
}) => {
  const cardRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const onUnlikeButtonClick = () => {
    removeLikedImage(cardRef.current.id);
  };

  return (
    <>
      <SRow ref={cardRef} id={id}>
        <PaddedCol md={4}>
          <SImage
            alt={`NASA Curiosity Rover Image: ${id}`}
            src={img_src}
            onClick={() => setShowModal(true)}
          />
        </PaddedCol>
        <PaddedCol md={8}>
          <CardTitle>{full_name}</CardTitle>
          <CardDate>{earth_date}</CardDate>
          <SLinkButton onClick={onUnlikeButtonClick}>
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
        </PaddedCol>
      </SRow>
      <ImageModalView
        setShowModal={setShowModal}
        showModal={showModal}
        modalBody={<ModalBody imgSrc={img_src} />}
        modalTitle={`${full_name} (${earth_date})`}
      />
    </>
  );
};

const PaddedCol = styled(Col)`
  padding: 10px 12px;
`;

const SRow = styled(Row)`
  margin: 10px 0;
  background-color: #3c4650;
  border-radius: 5px;
`;

const SImage = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
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

export default connect(null, { removeLikedImage })(LikedImagesCard);
