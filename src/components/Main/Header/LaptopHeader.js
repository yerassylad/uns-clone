import React from "react";
import HeaderElement from "./HeaderElement";
import Grid from '../Grid';
import Logo from  '../Logo'
import SearchBar from '../SearchBar'

const LaptopHeader = () => {
  return (
    <HeaderElement height="60px">
      <Grid>
        <Logo />
        <SearchBar />
      </Grid>
    </HeaderElement>
  );
};

export default LaptopHeader;
