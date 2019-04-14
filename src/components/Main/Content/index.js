import React from "react";
import PhotoStackContainer from '../PhotosStack/PhotoStackContainer'
import PhotoStackColumn from '../PhotosStack/PhotoStackColumn'

const Content = () => {
  return <PhotoStackContainer>
    <PhotoStackColumn>
      {[1,2,3,4].map(() => (
        <div
          style={{
            width: "100%",
            height: "700px",
            marginBottom: "20px",
            background: "black"
          }}
        />
      ))}  
    </PhotoStackColumn>
    <PhotoStackColumn>
      {[1,2,3,4,6,5,6,6].map(() => (
        <div
        style={{
          width: "100%",
          height: "400px",
          marginBottom: "20px",
          background: "green"
        }}
      />
      ))}
    </PhotoStackColumn>
  </PhotoStackContainer>
};

export default Content;
