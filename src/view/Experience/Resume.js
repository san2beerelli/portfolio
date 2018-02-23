import React, { Component } from "react";
import styled from "styled-components";
import pdf from "../../resources/logos/pdf.svg";
import word from "../../resources/logos/word.svg";

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0 0;
`;

const ResumeImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 10px;
  cursor: pointer;
`;

class Resume extends Component {
  render() {
    return (
      <ResumeWrapper>
        <ResumeImage src={word} />
        <ResumeImage src={pdf} />
      </ResumeWrapper>
    );
  }
}

export default Resume;
