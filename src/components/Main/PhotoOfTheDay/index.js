import styled from "styled-components";

const PhotoOfTheDay = styled("div")`
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: ${props => (props.height ? props.height : "500px")};
  background-color: rgba(0, 0, 0, 0.3);
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-color: tomato;
  }
`;

export default PhotoOfTheDay;
