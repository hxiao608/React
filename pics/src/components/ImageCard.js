// this component is to show one image by itself
import React from "react";

class ImageCard extends React.Component {
  //pass props from ImageList
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef(); //instance variable for later use
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans); //run setSpans after load event

    //console log before the image is loaded
    //console.log(this.imageRef.current);
    //console.log(this.imageRef.current.clientHeight);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image; //deconstruction
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
