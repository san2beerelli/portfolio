import React, { Component } from "react";
import styled from "styled-components";
import star from "../../resources/Star.svg";
import { For } from "react-extras";

const StyledLevelStarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledStarImg = styled.img`
  width: 10px;
  height: 10px;
`;

const LevelStar = props => {
  let starArr;
  if (props.level === "advanced") {
    starArr = [1, 2, 3];
  } else if (props.level === "moderate") {
    starArr = [1, 2];
  } else {
    starArr = [1];
  }
  return (
    <StyledLevelStarWrapper>
      <For
        of={starArr}
        render={(item, index) => <StyledStarImg key={index} src={star} />}
      />
    </StyledLevelStarWrapper>
  );
};

export default LevelStar;
