import React from "react";
import styled from "styled-components";

const Background = props => {
  const { children, src } = props;
  const StyledBackground = styled.div`
    width: 100%;
    height: 800px;
    background-image: url(${src});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
  `;
  return <StyledBackground src={src}>{children}</StyledBackground>;
};

export default Background;
