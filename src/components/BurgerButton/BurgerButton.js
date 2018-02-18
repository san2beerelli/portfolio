import React, { Component } from "react";
import styled from "styled-components";

const ButtonBg = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: solid 1px #272727;
  border-radius: 4px;
   &:hover {
     background-color #ccc;
  }
`;

class BurgerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconType: "menu"
    };
    this.buttonBgClickHandler = this.buttonBgClickHandler.bind(this);
  }
  buttonBgClickHandler() {
    const { iconType } = this.state;
    console.log(iconType);
    this.setState(prevState => ({
      iconType: prevState.iconType === "menu" ? "close" : "menu"
    }));
  }
  render() {
    const { iconType } = this.state;
    return (
      <ButtonBg onClick={this.buttonBgClickHandler}>
        <i className="material-icons">{iconType}</i>
      </ButtonBg>
    );
  }
}

export default BurgerButton;
