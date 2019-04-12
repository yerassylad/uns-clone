import styled from "styled-components";

const Wrapper = styled("div")`
  max-width: ${props => (props.width ? props.width : "1320px")};
  padding: ${props =>
    props.innerPadding ? `0 ${props.innerPadding}px` : "0 12px"};
  margin: 0 auto;
`;

export default Wrapper;
