import React, { Component } from 'react'
import PhotoStackImage from './PhotoStackImage';
import IntersectionVisible from 'react-intersection-visible';

export class PhotoStackPrelastImage extends Component {
    state = {
        imageLoaded: false
    }

    handleLoadedImage = () => {
        this.setState({
            imageLoaded: true
        })
    }

    handleOnShow = () => {
        if (this.state.imageLoaded) {
            this.props.onShow();
        }
    }

  render() {
      const {handleReached, onShow, ...rest} = this.props;
    return (
      <IntersectionVisible onShow={this.handleOnShow}>
          <PhotoStackImage onLoad={this.handleLoadedImage} {...rest} />
      </IntersectionVisible>
    );
  }
}

export default PhotoStackPrelastImage
