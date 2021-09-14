import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import format from "date-fns/format";
import subDays from "date-fns/subDays";
import theme from "../theme/theme";

import { fetchImages } from "../actions";

import ImageCard from "./ImageCard";
import LinkButton from "./LinkButton";
import HorizontalRule from "./HorizontalRule";
import Heading from "./Text/Heading";
import { Form, Row, Col } from "react-bootstrap";
import InfoMessage from "./InfoMessage";

const IMAGES_TO_ADD_ON_LOAD = 9;
const IMAGE_WIDTH = 250;

const ImageList = ({ fetchImages, images }) => {
  const [numImages, setNumImages] = useState(IMAGES_TO_ADD_ON_LOAD);
  const [date, setDate] = useState(
    format(subDays(new Date(), 2), "yyyy-MM-dd")
  );
  const [displayDate, setDisplayDate] = useState(date);

  useEffect(() => {
    fetchImages(date);
  }, [fetchImages]);

  const onDateSubmit = (e) => {
    e.preventDefault();
    setDisplayDate(date);
    fetchImages(date);
    setNumImages(IMAGES_TO_ADD_ON_LOAD);
  };

  const renderAddMoreImagesButton = () => {
    return (
      <AddMoreImagesContainer>
        <AddMoreImagesButton
          onClick={() => setNumImages(numImages + IMAGES_TO_ADD_ON_LOAD)}
        >
          Load More Images
        </AddMoreImagesButton>
      </AddMoreImagesContainer>
    );
  };

  const renderImages = () => {
    if (images.length > 0) {
      const renderedImages = images
        .map((ele, index) => {
          if (index < numImages) {
            return <ImageCard key={ele.id} image={ele} />;
          }
        })
        .filter(Boolean);

      return (
        <>
          <SImageList>{renderedImages}</SImageList>
          {renderAddMoreImagesButton()}
        </>
      );
    } else {
      return (
        <InfoMessage variant="dark">
          There are no images for this date!
        </InfoMessage>
      );
    }
  };

  return (
    <ImageListContainer>
      <HorizontalRule />
      <UtilityRow>
        <UtilityCol>
          <SHeading>Date: {displayDate}</SHeading>
        </UtilityCol>
        <UtilityCol style={{ textAlign: "right" }}>
          <SForm onSubmit={onDateSubmit}>
            <Form.Control
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <FormSubmitButton type="submit">Search</FormSubmitButton>
          </SForm>
        </UtilityCol>
      </UtilityRow>
      {renderImages()}
    </ImageListContainer>
  );
};

const AddMoreImagesContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const FormSubmitButton = styled(LinkButton)`
  margin-left: 10px;
  background-color: ${theme.color.defaultText};
  color: #1d1d1d;
  border: 2px solid ${theme.color.defaultText};

  &:hover {
    background-color: #1d1d1d;
    color: ${theme.color.defaultText};
    border: 2px solid ${theme.color.defaultText};
  }
`;

const UtilityRow = styled(Row)`
  margin: 10px 0;
`;

const UtilityCol = styled(Col)`
  padding: 0;
`;

const SForm = styled(Form)`
  display: inline-flex;
`;

const SHeading = styled(Heading)`
  font-size: 1.75rem;
  display: inline;
`;

const ImageListContainer = styled.div`
  margin-bottom: 30px;
`;

const AddMoreImagesButton = styled(LinkButton)`
  padding: 10px 30px 10px 30px;
  background-color: ${theme.color.defaultText};
  border: 2px solid ${theme.color.defaultText};
  color: #1d1d1d;

  &:hover {
    background-color: #1d1d1d;
    color: ${theme.color.defaultText};
    border: 2px solid ${theme.color.defaultText};
  }
`;

const SImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${IMAGE_WIDTH}px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
`;

const mapStateToProps = ({ images }) => {
  return { images };
};

export default connect(mapStateToProps, { fetchImages })(ImageList);
