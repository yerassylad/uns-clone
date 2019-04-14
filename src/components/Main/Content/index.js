import React from "react";
import {connect} from 'react-redux'
import PhotoStackContainer from '../PhotosStack/PhotoStackContainer'
import PhotoStackColumn from '../PhotosStack/PhotoStackColumn'
import PhotoStackImage from '../PhotosStack/PhotoStackImage'
import spreadArray from '../../../libs/spreadArray'

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

const Content = props => {
  const {columns, imagesArray} = props;
  const imagesSpreadedIntoColumns = spreadArray(columns, imagesArray);
  console.log('updated', columns);
  if (columns === 1) {
    return (
      <PhotoStackContainer>
          <PhotoStackColumn>
            {imagesSpreadedIntoColumns.map((imageUrl,index) => (
              <PhotoStackImage key={imageUrl} src={imageUrl} alt={`image-${index}`} />
            ))}
          </PhotoStackColumn>
      </PhotoStackContainer>
    );
  }
  return (
  <PhotoStackContainer>
    {imagesSpreadedIntoColumns.map((column, index) => (
      <PhotoStackColumn key={`column-${index}`}>
        {column.map((imageUrl,index) => (
          <PhotoStackImage key={imageUrl} src={imageUrl} alt={`image-${index}`} />
        ))}
      </PhotoStackColumn>
    ))}
  </PhotoStackContainer>
  );
};

// device type numbers equal to column numbers

const mapStateToProps = state => ({
  columns: state.core.deviceType,
  imagesArray: testArray
})

export default connect(mapStateToProps)(Content);
