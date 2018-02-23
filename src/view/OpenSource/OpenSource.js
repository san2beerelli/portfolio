import React, { Component } from "react";
import styled from "styled-components";
import { Title, PageWrapper } from "../../components";
import OpenSourceContainer from "./OpenSourceContainer";

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const CustomIcon = styled.div`
  cursor: pointer;
`;

class OpenSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCard: "left"
    };
    this.onIconClickHandler = this.onIconClickHandler.bind(this);
  }
  onIconClickHandler(btn) {
    this.setState({
      displayCard: btn
    });
  }
  render() {
    const { displayCard } = this.state;
    return (
      <PageWrapper>
        <Title>Open Source</Title>
        <OpenSourceContainer side={displayCard} />
        <IconWrapper>
          <CustomIcon onClick={() => this.onIconClickHandler("left")}>
            <i className="material-icons">keyboard_arrow_left</i>
          </CustomIcon>
          <CustomIcon onClick={() => this.onIconClickHandler("right")}>
            <i className="material-icons">keyboard_arrow_right</i>
          </CustomIcon>
        </IconWrapper>
      </PageWrapper>
    );
  }
}

export default OpenSource;
