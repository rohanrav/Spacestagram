import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addLikedImage, removeLikedImage } from "../actions";

import theme from "../theme/theme";

import { Card } from "react-bootstrap";
import Heading from "./Text/Heading";
import LinkButton from "./LinkButton";
import ImageModalView from "./ImageModalView";
import ModalBody from "./ModalBody";

const ImageCard = ({ addLikedImage, removeLikedImage, image, likedImages }) => {
  const imageRef = useRef();
  const cardBodyRef = useRef();
  const [spans, setSpans] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    imageRef.current.addEventListener("load", setImageRowSpans);
  }, []);

  useEffect(() => {
    if (likedImages.filter((ele) => ele.id === image.id).length > 0) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [likedImages]);

  const setImageRowSpans = () => {
    const height =
      imageRef.current?.clientHeight + cardBodyRef.current?.clientHeight || 0;
    const spans = Math.ceil(height / 10 + 1);
    setSpans(spans);
  };

  const onLikeButtonClick = () => {
    if (!isAdded) {
      addLikedImage(cardBodyRef.current.id);
    } else {
      removeLikedImage(cardBodyRef.current.id);
    }
  };

  const { img_src, id, earth_date, camera } = image;
  return (
    <React.Fragment>
      <Card
        style={{
          gridRowEnd: `span ${spans}`,
          marginBottom: "10px",
          backgroundColor: theme.color.primary,
        }}
      >
        <SCardImg
          variant="top"
          ref={imageRef}
          alt={`Title: ${camera.full_name} - Date: ${earth_date}`}
          src={img_src}
          onClick={() => setShowModal(true)}
        />
        <SCardBody ref={cardBodyRef} id={id}>
          <CardTitle>{camera.full_name}</CardTitle>
          <CardBodyText>{earth_date}</CardBodyText>
          <LinkButton onClick={onLikeButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
            </svg>{" "}
            {isAdded ? "Unlike" : "Like"}
          </LinkButton>
        </SCardBody>
      </Card>
      <ImageModalView
        setShowModal={setShowModal}
        showModal={showModal}
        modalBody={
          <ModalBody
            imgSrc={img_src}
            alt={`Title: ${camera.full_name} - Date: ${earth_date}`}
          />
        }
        modalTitle={`${camera.full_name} (${earth_date})`}
      />
    </React.Fragment>
  );
};

const SCardImg = styled(Card.Img)`
  padding: 16px;
  border-radius: 22.5px;
  cursor: pointer;
`;

const SCardBody = styled(Card.Body)`
  padding-top: 0;
  color: ${theme.color.defaultText};
`;

const CardTitle = styled(Heading)`
  font-size: 1.25rem;
`;

const CardBodyText = styled(Heading)`
  font-size: 1rem;
  font-weight: 400;
`;

const mapStateToProps = ({ likedImages }) => {
  return { likedImages };
};

export default connect(mapStateToProps, { addLikedImage, removeLikedImage })(
  ImageCard
);
