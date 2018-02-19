import React, { Component } from "react";
import { Header } from "../components";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import styled from "styled-components";
import Intro from "./Intro";

const StyledElement = styled.div`
  height: 1000px;
  background-color: #ededed;
  font-size: 45px;
  border-top: 1px solid #000;
  padding-top: 55px;
  padding-left: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.onNavButtonClick = this.onNavButtonClick.bind(this);
  }
  onNavButtonClick(evt) {
    this.scrollTo(evt);
  }
  componentDidMount() {
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo(element) {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }
  render() {
    return (
      <div>
        <Header onNavButtonClick={this.onNavButtonClick}>App</Header>
        <Intro />
        <Element name="SKILLS">
          <StyledElement>WIP</StyledElement>
        </Element>
        <Element name="EXPERIENCE">
          <StyledElement>WIP</StyledElement>
        </Element>
        <Element name="EDUCATION">
          <StyledElement>WIP</StyledElement>
        </Element>
        <Element name="CONTACT">
          <StyledElement>WIP</StyledElement>
        </Element>
      </div>
    );
  }
}

export default App;
