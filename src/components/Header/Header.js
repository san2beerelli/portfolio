import React, { Component } from "react";
import styled from "styled-components";
import BurgerButton from "../BurgerButton/BurgerButton";
import logo from "../../resources/san2.png";
import MediaQuery from "react-responsive";
import NavBar from "../NavBar/NavBar";

const StyledHeader = styled.div`
  background-color: #e3e3e3;
  display: flex;
  top: 0;
  border-width: 0 0 1px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  box-shadow: -1px 2px 6px rgba(0, 0, 0, 0.175);
  padding: 0 20px;
`;
const StyledLogo = styled.img`
  width: 52px;
  height: 52px;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledLogo src={logo} />
        <MediaQuery maxWidth={768}>
          <BurgerButton />
        </MediaQuery>
        <MediaQuery minWidth={769}>
          <NavBar onNavButtonClick={evt => console.log(evt)} />
        </MediaQuery>
      </StyledHeader>
    );
  }
}

export default Header;
