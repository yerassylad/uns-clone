import React from "react";

const Logo = props => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 32 32"
      aria-labelledby="unsplash-home"
      aria-hidden="false"
      width={32}
      height={32}
      fill="black"
      {...props}
    >
      <title id="unsplash-home">Unsplash Home</title>
      <path fill="fill" d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
    </svg>
  );
};

export default Logo;
