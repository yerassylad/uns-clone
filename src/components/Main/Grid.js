import styled from "styled-components";

const Grid = styled("div")`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
`;

export default Grid;
