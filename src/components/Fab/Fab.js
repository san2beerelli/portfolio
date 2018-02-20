import React, { Component } from "react";
import styled from "styled-components";

const StyledFab = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 1040;
  cursor: pointer;
`;

const Fab = props => {
  return (
    <StyledFab onClick={props.fabClick}>
      <i className="material-icons">keyboard_arrow_up</i>
    </StyledFab>
  );
};

export default Fab;
