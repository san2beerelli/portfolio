import React, { Component } from "react";
import { Header, Fab } from "../components";
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
import Skills from "./skills/Skills";
import Experience from "./Experience/Experience";
import OpenSource from "./OpenSource/OpenSource";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import { If } from "react-extras";

const StyledElement = styled.div`
  height: 1000px;
  padding-top: 85px;
  padding-left: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.onNavButtonClick = this.onNavButtonClick.bind(this);
    this.onFabClickHandler = this.onFabClickHandler.bind(this);
    this.windowScroll = this.windowScroll.bind(this);
    this.state = { showFab: false };
  }
  onNavButtonClick(evt) {
    this.scrollTo(evt);
  }
  onFabClickHandler() {
    scroll.scrollToTop();
  }
  componentDidMount() {
    window.addEventListener("scroll", this.windowScroll);
    scrollSpy.update();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.windowScroll);
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
  windowScroll() {
    let showFab = false;
    if (window.scrollY > 200) {
      showFab = true;
    }
    this.setState({ showFab });
  }

  render() {
    const { showFab } = this.state;
    return (
      <div>
        <Header onNavButtonClick={this.onNavButtonClick}>App</Header>
        <If condition={showFab}>
          <Fab fabClick={this.onFabClickHandler} />
        </If>
        <Intro />
        <Element name="SKILLS">
          <Skills />
        </Element>
        <Element name="EXPERIENCE">
          <Experience />
        </Element>
        <Element name="OPEN SOURCE">
          <OpenSource />
        </Element>
        <Element name="EDUCATION">
          <Education />
        </Element>
        <Element name="CONTACT">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default App;
