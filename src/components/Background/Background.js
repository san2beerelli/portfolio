import React from "react";
import styled from "styled-components";

const Background = props => {
  const { children, src } = props;
  const StyledBackground = styled.div`
    width: 100%;
    height: 619px;
    background-image: url(${src});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #e3e3e3;
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
  `;
  return <StyledBackground>{children}</StyledBackground>;
};

export default Background;
