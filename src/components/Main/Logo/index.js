import React from "react";
import Unsplash from "./Unsplash";
import Text from "../Text";
import Grid from "../Grid";

const Logo = () => {
  return (
    <Grid inline alignItems="center">
      <Unsplash width={40} height={40} />
      <Grid direction="column" style={{ marginLeft: 12 }}>
        <Text bold>Unsplash Clone</Text>
        <Text fontSize={"0.8em"} color="grey" padding="5px 0 0 0">
          yerassyl.ad@gmail.com
        </Text>
      </Grid>
    </Grid>
  );
};

export default Logo;
