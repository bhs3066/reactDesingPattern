import React from "react";
import styled from "styled-components";

// 조건부 렌더링을 관리하는 HOC
// WrappedComponent은 SimpleComponent이다.
const withConditionalRender = (SimpleComponent, condition) => {};

export default withConditionalRender;

const FalseCondition = styled.div`
  background-color: red;
`;

const TrueCondition = styled.div`
  background-color: green;
`;
