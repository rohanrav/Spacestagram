import React from "react";
import styled from "styled-components";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    console.log(this.imageRef);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans: spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <SImage ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

const SImage = styled.img`
  width: 250px;
`;

export default ImageCard;
