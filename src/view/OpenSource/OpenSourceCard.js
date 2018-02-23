import React, { Component } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 6px;
  border: solid 1px #e6e6e6;
  background: #f5f5f5;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const OpenSourceCard = props => {
  return <CardWrapper>{props.children} </CardWrapper>;
};

export default OpenSourceCard;
