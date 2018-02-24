import React, { Component } from "react";
import styled from "styled-components";
import Slack from "../../resources/logos/slack.svg";
import Git from "../../resources/logos/github_square.svg";
import Twitter from "../../resources/logos/twitter.svg";
import LinkedIn from "../../resources/logos/linkedin.svg";

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const IconButton = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  margin: 10px;
`;

const ContactButtons = props => {
  return (
    <Bar>
      <IconButton src={Slack} onClick={() => props.buttonClick("slack")} />
      <IconButton src={Git} onClick={() => props.buttonClick("github")} />
      <IconButton src={Twitter} onClick={() => props.buttonClick("twitter")} />
      <IconButton
        src={LinkedIn}
        onClick={() => props.buttonClick("linkedin")}
      />
    </Bar>
  );
};

export default ContactButtons;
