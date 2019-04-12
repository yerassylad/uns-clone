import React from "react";
import HeaderElement from "./HeaderElement";

const LaptopHeader = () => {
  return (
    <HeaderElement height="40px">
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "Blue",
          color: "red"
        }}
      >
        Laptop
      </div>
    </HeaderElement>
  );
};

export default LaptopHeader;
