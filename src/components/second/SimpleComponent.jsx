// SimpleComponent.jsx
import React, { useState } from "react";
import styled from "styled-components";
import withBorder from "../second/WithBorder";
import withConditionalRender from "../second/WithConditionalRender";

// 조건부 렌더링을 적용할 내부 컴포넌트
const InnerComponent = ({ text }) => {
  return <Text>{text}</Text>;
};

// withBorder HOC를 적용하여 기능 추가
const StyledInnerComponent = withBorder(InnerComponent);

// SimpleComponent 컴포넌트
const SimpleComponent = ({ text }) => {
  const [condition, setCondition] = useState(true);

  // 조건을 토글하는 함수
  const toggleCondition = () => {
    setCondition((prevCondition) => !prevCondition);
  };

  // withConditionalRender HOC를 사용하여 조건을 설정
  const ConditionalComponent = withConditionalRender(
    StyledInnerComponent,
    condition
  );

  return (
    <div>
      <ConditionalComponent text={text} />
      <Button onClick={toggleCondition}>
        {condition ? "현재 True" : "현재 False"}
      </Button>
    </div>
  );
};

export default SimpleComponent;

const Text = styled.div`
  font-size: 18px;
  color: #333;
  padding: 20px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
