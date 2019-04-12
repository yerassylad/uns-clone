import styled from "styled-components";

const Text = styled("p")`
  margin: 0;
  padding: 0;
  line-height: 1;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-weight: ${props => (props.bold ? 700 : 400)};
  font-size: ${props => props.fontSize};
  color: ${props => (props.color ? props.color : "inherit")};
`;

export default Text;
