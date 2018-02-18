import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  height: 50px;
  color: ${props => props.color};
  text-transform: uppercase;
  font-size: 14px;
  &:hover {
     color #EC575A;
  }
  margin : 0px 10px;
}
`;

const NavButton = props => {
  return (
    <StyledButton
      onClick={() => props.onClick(props.label)}
      color={props.selected ? "#EC575A" : "#777"}
    >
      {props.label}
    </StyledButton>
  );
};

export default NavButton;
