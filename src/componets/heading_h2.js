import React from 'react';
import styled from 'styled-components';

const Heading_h2 = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  color: ${(props) => (props.primary ? 'black' : 'white')};
`;

export default Heading_h2;
