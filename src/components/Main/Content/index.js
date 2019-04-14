import React, { Component } from "react";
import {connect} from 'react-redux';
import PhotoStackContainer from '../PhotosStack/PhotoStackContainer';
import PhotoStackColumn from '../PhotosStack/PhotoStackColumn';
import PhotoStackImage from '../PhotosStack/PhotoStackImage';
import spreadArray from '../../../libs/spreadArray';
import PhotoStackPrelastImage from '../PhotosStack/PhotoStackPrelastImage'

const testArray = [
  "https://pp.userapi.com/c845016/v845016889/d5fe4/4xjadZzVihk.jpg",
  "https://pp.userapi.com/c845016/v845016889/d5fe4/4xjadZzVihk.jpg",
  "https://pp.userapi.com/c849432/v849432546/5c290/IY2R3Cj6gkQ.jpg",
  "https://pp.userapi.com/c846323/v846323472/1cc876/sgfEorVQqHc.jpg",
  "https://pp.userapi.com/c849432/v849432546/5c290/IY2R3Cj6gkQ.jpg",
  "https://pp.userapi.com/c846323/v846323472/1cc876/sgfEorVQqHc.jpg",
  "https://pp.userapi.com/c845016/v845016889/d5fe4/4xjadZzVihk.jpg",
  "https://pp.userapi.com/c849432/v849432546/5c290/IY2R3Cj6gkQ.jpg",
  "https://pp.userapi.com/c845016/v845016889/d5fe4/4xjadZzVihk.jpg",
  "https://pp.userapi.com/c846323/v846323472/1cc876/sgfEorVQqHc.jpg",
]

export class Content extends Component {
  state = {
    imagesArray: testArray  
  }

  expandImagesArray = () => this.setState({
    imagesArray: [...this.state.imagesArray, ...testArray]
  })

  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.state.imagesArray);
  }

  render() {
      const {columns} = this.props;
      const {imagesArray} = this.state;
      const imagesSpreadedIntoColumns = spreadArray(columns, imagesArray);
      if (columns === 1) {
        return (
          <PhotoStackContainer>
              <PhotoStackColumn>
                {imagesSpreadedIntoColumns.map((imageUrl,index) => {
                  if (imagesSpreadedIntoColumns.length - 1 === index) {
                    return <PhotoStackPrelastImage onShow={this.expandImagesArray} key={imageUrl} src={imageUrl} alt={`image-${index}`} />
                  }
                  return <PhotoStackImage  key={imageUrl} src={imageUrl} alt={`image-${index}`} />
      })}
              </PhotoStackColumn>
          </PhotoStackContainer>
        );
      }
      return (
      <PhotoStackContainer>
        {imagesSpreadedIntoColumns.map((column, index) => (
          <PhotoStackColumn key={`column-${index}`}>
            {column.map((imageUrl,index) => {
              if (column.length - 1 === index) {
                return (
                  <PhotoStackPrelastImage key={imageUrl} onShow={this.expandImagesArray} src={imageUrl} alt={`image-${index}`} />
                );
              }
              return <PhotoStackImage key={imageUrl} src={imageUrl} alt={`image-${index}`} />;
        })}
          </PhotoStackColumn>
        ))}
      </PhotoStackContainer>
    );
  }
}

// device type numbers equal to column numbers

const mapStateToProps = state => ({
  columns: state.core.deviceType,
});

export default connect(mapStateToProps)(Content);
