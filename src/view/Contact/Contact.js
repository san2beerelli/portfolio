import React, { Component } from "react";
import styled from "styled-components";
import { Title, PageWrapper } from "../../components";
import ContactCard from "./ContactCard";
import ContactButtons from "./ContactButtons";
import Bounce from "react-reveal/Bounce";

const CardWrapper = styled.div`
  height: 200px;
  display: block;
`;

const StyledText = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  color: #000000;
  text-align: center;
`;
const openUrl = url => {
  var win = window.open(url, "_blank");
  win.focus();
};
const OpenIcon = props => {
  return (
    <div style={{ cursor: "pointer" }} onClick={() => openUrl(props.url)}>
      <i className="material-icons">open_in_new</i>
    </div>
  );
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: "slack"
    };
    this.onContactButtonClickHandler = this.onContactButtonClickHandler.bind(
      this
    );
    this.onTextClickHandler = this.onTextClickHandler.bind(this);
  }
  onContactButtonClickHandler(btn) {
    this.setState({ selectedCard: btn });
  }
  onTextClickHandler(evt) {
    console.log(evt);
  }

  //https://hooks.slack.com/services/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
  render() {
    const { selectedCard } = this.state;
    return (
      <PageWrapper>
        <Title>Contact </Title>
        <CardWrapper>
          <Bounce left opposite when={selectedCard === "linkedin"}>
            <ContactCard type="linkedin">
              <StyledText>
                https://www.linkedin.com/in/santhoshbeerelli/
              </StyledText>
              <OpenIcon url="https://www.linkedin.com/in/santhoshbeerelli/" />
            </ContactCard>
          </Bounce>
          <Bounce left opposite when={selectedCard === "twitter"}>
            <ContactCard type="twitter">
              <StyledText>https://twitter.com/san2beerelli</StyledText>
              <OpenIcon url="https://twitter.com/san2beerelli" />
            </ContactCard>
          </Bounce>
          <Bounce left opposite when={selectedCard === "github"}>
            <ContactCard type="github">
              <StyledText>https://github.com/san2beerelli</StyledText>
              <OpenIcon url="https://github.com/san2beerelli" />
            </ContactCard>
          </Bounce>
          <Bounce left opposite when={selectedCard === "slack"}>
            <ContactCard type="slack">Slack</ContactCard>
          </Bounce>
        </CardWrapper>

        <ContactButtons buttonClick={this.onContactButtonClickHandler} />
      </PageWrapper>
    );
  }
}

export default Contact;
