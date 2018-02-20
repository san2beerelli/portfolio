import React, { Component } from "react";
import MobileNavButton from "./MobileNavButton";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const StyledMobileNavBar = styled.div`
  margin-top: 80px;
  display: flex;
  width: 100%;
  z-index: 1031;
  position: fixed;
`;
const StyledButton = styled.button`
  background: #e3e3e3;
  border-color: #777;
  border-width: ${props =>
    props.last ? "1px 0px 1px 0px" : "1px 0px 0px 0px"};
  outline: none;
  cursor: pointer;
  height: 50px;
  width : 100%;
  color: #777;
  text-transform: uppercase;
  font-size: 14px;
  &:hover {
     color #EC575A;
  }
}
`;

class MobileNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.navButtons = [
      { name: "SKILLS", id: 1 },
      { name: "EXPERIENCE", id: 2 },
      { name: "OPEN SOURCE", id: 3 },
      { name: "EDUCATION", id: 4 },
      { name: "CONTACT", id: 5 }
    ];
    this.onNavButtonClickHandler = this.onNavButtonClickHandler.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({ show: props.show });
  }
  onNavButtonClickHandler(btn) {
    this.setState({ show: false });
    this.props.navButtonClick(btn);
  }

  render() {
    return (
      <StyledMobileNavBar>
        <Fade left opposite cascade when={this.state.show}>
          <div style={{ width: "100%" }}>
            {this.navButtons.map((item, index) => {
              return (
                <StyledButton
                  key={item.id}
                  last={this.navButtons.length - 1 === index}
                  onClick={() => this.onNavButtonClickHandler(item)}
                >
                  {item.name}
                </StyledButton>
              );
            })}
          </div>
        </Fade>
      </StyledMobileNavBar>
    );
  }
}

export default MobileNavBar;
