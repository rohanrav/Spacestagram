import React from "react";
import styled from "styled-components";
import theme from "../theme/theme";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

import { addLikedImage, removeLikedImage } from "../actions";

import Heading from "./Text/Heading";
import LinkButton from "./LinkButton";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.cardBodyRef = React.createRef();
    this.state = { spans: 0, isAdded: false };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height =
      this.imageRef.current.clientHeight +
      this.cardBodyRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans: spans });
  };

  onLikeButtonClick = (e) => {
    if (!this.state.isAdded) {
      this.props.addLikedImage(this.cardBodyRef.current.id);
    } else {
      this.props.removeLikedImage(this.cardBodyRef.current.id);
    }
    this.setState({ isAdded: !this.state.isAdded });
  };

  render() {
    const { img_src, id, earth_date, camera } = this.props.image;
    return (
      <Card
        style={{
          gridRowEnd: `span ${this.state.spans}`,
          marginBottom: "10px",
          backgroundColor: "#3c4650",
        }}
      >
        <SCardImg
          variant="top"
          ref={this.imageRef}
          alt={`NASA Curiosity Rover Image: ${id}`}
          src={img_src}
        />
        <SCardBody ref={this.cardBodyRef} id={id}>
          <CardTitle>{camera.full_name}</CardTitle>
          <CardBodyText>{earth_date}</CardBodyText>
          <LinkButton onClick={this.onLikeButtonClick}>
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
            {this.state.isAdded ? "Unlike" : "Like"}
          </LinkButton>
        </SCardBody>
      </Card>
    );
  }
}

const SCardImg = styled(Card.Img)`
  padding: 16px;
  border-radius: 22.5px;
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

// this.props.likedImages.filter((imgId) => imgId === id).length > 0
