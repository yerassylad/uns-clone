import React from 'react';
import styled from 'styled-components';

const SearchIcon = props => {
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
      <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
    </svg>
  )
}

const StyledSearchIcon = styled(SearchIcon)`
    padding-left: 14px;
`;

export default StyledSearchIcon;
