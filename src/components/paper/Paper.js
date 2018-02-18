import React, { Component } from "react";
import styled from "styled-components";

const Paper = props => {
  const { children } = props;
  const StyledPaper = styled.div`
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    background-color: #e3e3e3;
    padding: 20px;
    width: 300px;
    height: 400px;
  `;
  return <StyledPaper>{children}</StyledPaper>;
};

export default Paper;
