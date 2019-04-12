import React from "react";
import HeaderElement from "./HeaderElement";

const DesktopHeader = () => {
  return (
    <HeaderElement height="60px">
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "green",
          color: "brown"
        }}
      >
        Desktop
      </div>
    </HeaderElement>
  );
};

export default DesktopHeader;
