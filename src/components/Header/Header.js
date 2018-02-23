import React, { Component } from "react";
import styled from "styled-components";
import BurgerButton from "../BurgerButton/BurgerButton";
import MobileNavBar from "../NavBar/MobileNavBar";
import logo from "../../resources/san2.png";
import MediaQuery from "react-responsive";
import NavBar from "../NavBar/NavBar";
import { If } from "react-extras";

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
const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: false,
      showMobileNav: false
    };
    this.onNavButtonClickHandler = this.onNavButtonClickHandler.bind(this);
    this.onMobileNavButtonClickHandler = this.onMobileNavButtonClickHandler.bind(
      this
    );
    this.burgerClickHandler = this.burgerClickHandler.bind(this);
    this.windowScroll = this.windowScroll.bind(this);
  }
  onMobileNavButtonClickHandler(evt) {
    this.props.onNavButtonClick(evt.name);
    this.setState({ showMobileNav: false });
  }
  onNavButtonClickHandler(evt) {
    this.props.onNavButtonClick(evt);
  }
  burgerClickHandler(evt) {
    let showMobileNav = false;
    if (evt === "menu") {
      showMobileNav = true;
    }
    this.setState({ showMobileNav });
  }
  windowScroll() {
    let shadow = false;
    if (window.scrollY > 80) {
      shadow = true;
    }
    this.setState({ shadow });
  }
  componentDidMount() {
    window.addEventListener("scroll", this.windowScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.windowScroll);
  }
  render() {
    const { shadow, showMobileNav } = this.state;
    return (
      <StyledHeaderWrapper>
        <StyledHeader shadow={shadow} whitebg={shadow}>
          <StyledLogo src={logo} />
          <MediaQuery maxWidth={768}>
            <BurgerButton
              burgerClick={this.burgerClickHandler}
              showMenu={showMobileNav}
            />
          </MediaQuery>
          <MediaQuery minWidth={769}>
            <NavBar
              onNavButtonClick={evt => this.onNavButtonClickHandler(evt)}
            />
          </MediaQuery>
        </StyledHeader>
        <MediaQuery maxWidth={768}>
          <MobileNavBar
            show={showMobileNav}
            navButtonClick={this.onMobileNavButtonClickHandler}
          />
        </MediaQuery>
      </StyledHeaderWrapper>
    );
  }
}

export default Header;
