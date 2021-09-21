import React, { useEffect, useState } from "react";
import styled from "styled-components";
import format from "date-fns/format";
import subDays from "date-fns/subDays";
import { connect } from "react-redux";
import { fetchImages } from "../actions";

import theme from "../theme/theme";

import { Form, Row, Col } from "react-bootstrap";
import ImageCard from "./ImageCard";
import LinkButton from "./LinkButton";
import HorizontalRule from "./HorizontalRule";
import Heading from "./Text/Heading";
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
          inverted
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
        <React.Fragment>
          <SImageList>{renderedImages}</SImageList>
          {renderAddMoreImagesButton()}
        </React.Fragment>
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
      <SRow>
        <SCol lg={6}>
          <DateHeading>Date: {displayDate}</DateHeading>
        </SCol>
        <SCol lg={6} style={{ textAlign: "right" }}>
          <DateSearchForm onSubmit={onDateSubmit}>
            <Form.Control
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <FormSubmitButton type="submit" inverted>
              Search
            </FormSubmitButton>
          </DateSearchForm>
        </SCol>
      </SRow>
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
`;

const SRow = styled(Row)`
  margin: 10px 0;
`;

const SCol = styled(Col)`
  padding: 0;

  @media ${theme.media["tablet"]} {
    &:first-child {
      margin-bottom: 10px;
    }
  }

  @media ${theme.media["mobile"]} {
    margin-bottom: 10px;

    &:first-child {
      text-align: center;
    }
  }
`;

const DateSearchForm = styled(Form)`
  display: inline-flex;

  @media ${theme.media["tablet"]} {
    width: 100%;
  }

  @media ${theme.media["mobile"]} {
    width: 100%;
  }
`;

const DateHeading = styled(Heading)`
  font-size: 1.75rem;
  display: inline;

  @media ${theme.media["mobile"]} {
    font-size: 1.35rem;
  }
`;

const ImageListContainer = styled.div`
  margin-bottom: 30px;
`;

const AddMoreImagesButton = styled(LinkButton)`
  padding: 10px 30px 10px 30px;
`;

const SImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${IMAGE_WIDTH}px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;

  @media ${theme.media["desktop"]} {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${IMAGE_WIDTH - 50}px, 1fr)
    );
  }
`;

const mapStateToProps = ({ images }) => {
  return { images };
};

export default connect(mapStateToProps, { fetchImages })(ImageList);
