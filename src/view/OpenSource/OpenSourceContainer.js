import React, { Component } from "react";
import AnimakitRotator from "animakit-rotator";
import OpenSourceCard from "./OpenSourceCard";
import git from "../../resources/logos/github.svg";
import styled from "styled-components";

const Icon = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
const StyledHeader = styled.div`
  font-family: "Oswald";
  font-size: 20px;
  color: #000000;
`;
const StyledText = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  color: #898989;
  text-align: center;
`;

const OpenSourceContainer = props => {
  const openUrl = url => {
    var win = window.open(url, "_blank");
    win.focus();
  };
  const onMWClickHandler = () => {
    openUrl("https://material-webcomponents.com/");
  };
  const onSnakebelClickHandler = () => {
    openUrl("https://github.com/snakebel");
  };
  return (
    <AnimakitRotator axis="Y" shadow side={props.side} background="#e3e3e3">
      <OpenSourceCard key="left">
        <Icon src={git} onClick={onMWClickHandler} />
        <StyledHeader>material-webcomponents</StyledHeader>
        <StyledText>
          Web Components that implements Google's Material Design and supports
          most of the popular frameworks
        </StyledText>
      </OpenSourceCard>;
      <OpenSourceCard key="right">
        <Icon src={git} onClick={onSnakebelClickHandler} />
        <StyledHeader>snakebel</StyledHeader>
        <StyledText>
          Tiny reusable web-components or Custom HTML Elements that can be used
          with any Javascript framework or no framework
        </StyledText>
      </OpenSourceCard>;
    </AnimakitRotator>
  );
};

export default OpenSourceContainer;
