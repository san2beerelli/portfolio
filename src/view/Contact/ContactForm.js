import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  color: #000000;
  text-align: center;
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiline: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitClickHandler = this.onSubmitClickHandler.bind(this);
  }
  handleChange(event) {
    this.setState({
      multiline: event.target.value,
      submitted: false
    });
  }
  onSubmitClickHandler() {
    const { multiline } = this.state;
    this.sendMessage(multiline);
  }

  sendMessage(message) {
    const me = this;
    fetch(
      "https://hooks.slack.com/services/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",
      {
        method: "post",
        body: JSON.stringify({ text: message })
      }
    ).then(function(response) {
      me.setState({
        submitted: true
      });
    });
  }
  renderForm() {
    return (
      <FormWrapper>
        <TextField
          label="Email & Message"
          multiline
          rows="4"
          value={this.state.multiline}
          onChange={this.handleChange}
          margin="normal"
          style={{ width: "95%", marginLeft: "10px", marginRight: "10px" }}
        />
        <Button
          onClick={this.onSubmitClickHandler}
          style={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "#ffffff"
          }}
        >
          MESSAGE ME
        </Button>
      </FormWrapper>
    );
  }
  renderThankYou() {
    return <StyledText>Thank You ! I will get back to you !</StyledText>;
  }

  render() {
    const { submitted } = this.state;
    if (submitted) {
      return this.renderThankYou();
    }
    return this.renderForm();
  }
}

export default ContactForm;
