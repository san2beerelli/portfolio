import React, { Component } from "react";
import styled from "styled-components";
import { Title, PageWrapper } from "../../components";

const StyledText = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  color: #000000;
  text-align: center;
  margin-top: 20px ;
`;

class Education extends Component {
  render() {
    return (
      <PageWrapper>
        <Title>Education </Title>
        <StyledText>
          Master of Computer Applications – 2006, Osmania University, Hyderabad,
          India.
        </StyledText>
        <StyledText>
          Bachelor of Computer Applications – 2003, Osmania University,
          Hyderabad, India.
        </StyledText>
      </PageWrapper>
    );
  }
}

export default Education;
