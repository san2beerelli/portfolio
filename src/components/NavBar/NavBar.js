import React, { Component } from "react";
import NavButton from "./NavButton";
import styled from "styled-components";

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.navButtons = [
      { name: "SKILLS", id: 1 },
      { name: "EXPERIENCE", id: 2 },
      { name: "OPEN SOURCE", id: 3 },
      { name: "EDUCATION", id: 4 },
      { name: "CONTACT", id: 5 }
    ];
    this.state = {
      selected: ""
    };
    this.onNavButtonClickHandler = this.onNavButtonClickHandler.bind(this);
  }
  onNavButtonClickHandler(selectedButton) {
    this.setState({ selected: selectedButton });
    this.props.onNavButtonClick(selectedButton);
  }
  render() {
    const { selected } = this.state;
    return (
      <NavBarWrapper>
        {this.navButtons.map(item => {
          return (
            <NavButton
              key={item.id}
              onClick={this.onNavButtonClickHandler}
              label={item.name}
              selected={item.name === selected ? true : false}
            />
          );
        })}
      </NavBarWrapper>
    );
  }
}

export default NavBar;
