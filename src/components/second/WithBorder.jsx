import React from "react";
import styled from "styled-components";

// 테두리를 추가하는 HOC
const withBorder = (WrappedComponent) => {};

export default withBorder;

const BorderedContainer = styled.div`
  border: 2px solid #007bff;
  padding: 10px;
  border-radius: 5px;
`;
