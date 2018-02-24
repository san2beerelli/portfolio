import React, { Component } from "react";
import styled from "styled-components";

const colors = {
  slack: {
    left: "#7dccd3",
    top: "#e3ac35",
    right: "#d42265",
    bottom: "#44ba92"
  },
  github: {
    left: "#000000",
    top: "#000000",
    right: "#000000",
    bottom: "#000000"
  },
  linkedin: {
    left: "#0285c1",
    top: "#0285c1",
    right: "#0285c1",
    bottom: "#0285c1"
  },
  twitter: {
    left: "#6497d1",
    top: "#6497d1",
    right: "#6497d1",
    bottom: "#6497d1"
  }
};

const CardWrapper = styled.div`
  min-width: 325px;
  min-height: 200px;
  border-radius: 8px;
  border: solid 6px;
  border-left-color: ${props => colors[props.type].left};
  border-top-color: ${props => colors[props.type].top};
  border-right-color: ${props => colors[props.type].right};
  border-bottom-color: ${props => colors[props.type].bottom};
  background: #f5f5f5;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
  position: absolute;
  margin-left: -162px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactCard = props => {
  const type = props.type ? props.type : "slack";
  return <CardWrapper type={type}>{props.children}</CardWrapper>;
};

export default ContactCard;
