import React, { Component } from "react";
import styled from "styled-components";
import BurgerButton from "../BurgerButton/BurgerButton";
import logo from "../../resources/san2.png";
import MediaQuery from "react-responsive";
import NavBar from "../NavBar/NavBar";

const StyledHeader = styled.div`
  background-color: ${props => (props.whitebg ? "#ffffff" : "#e3e3e3")};
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
  box-shadow: ${props =>
    props.shadow ? "-1px 2px 6px rgba(0, 0, 0, 0.175)" : "none"};
  padding: 0 20px;
`;
const StyledLogo = styled.img`
  width: 52px;
  height: 52px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let shadow = false;
      if (window.scrollY > 80) {
        shadow = true;
      }
      this.setState({ shadow });
    });
  }
  render() {
    const { shadow } = this.state;
    return (
      <StyledHeader shadow={shadow} whitebg={shadow}>
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
