import React from "react";
import styled from "styled-components";

const Header = styled("header")`
  display: block;
  box-sizing: border-box;
`;

const FixedHeader = styled("nav")`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props => props.height};
  z-index: 10;
`;

const FixedHeaderShadow = styled("div")`
  height: ${props => props.height};
  width: 100%;
  background-color: transparent;
`;

const HeaderElement = props => {
  const { height, children } = props;
  return (
    <Header>
      <FixedHeader height={height}>{children}</FixedHeader>
      <FixedHeaderShadow height={height} />
    </Header>
  );
};

export default HeaderElement;
