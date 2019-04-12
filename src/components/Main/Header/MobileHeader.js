import React from "react";
import HeaderElement from "./HeaderElement";

const MobileHeader = props => {
  return (
    <HeaderElement height="20px">
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          color: "white"
        }}
      >
        Mobile
      </div>
    </HeaderElement>
  );
};

export default MobileHeader;
