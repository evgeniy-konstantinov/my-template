import React from "react";
import styled from "styled-components";

const Heading_h2 = styled.h2`
  margin: 0 0 50px;
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  text-align: center;
  color: ${(props) => (props.primary ? "black" : "white")};
`;

export default Heading_h2;
