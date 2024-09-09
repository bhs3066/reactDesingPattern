import React, { useState } from "react";
import styled from "styled-components";
import withBorder from "../second/WithBorder";
import withConditionalRender from "../second/WithConditionalRender";

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
