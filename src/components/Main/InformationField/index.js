import React from 'react';
import styled from "styled-components";

const InformationField = styled(({field1, field2, field3, ...rest}) => (
  <div {...rest}>
    {field1 && <div>{field1}</div>}
    {field2 && <div>{field2}</div>}
    {field3 && <div>{field3}</div>}
  </div>
))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
`;

export default InformationField;
