import React, { Component } from "react";
import styled from "styled-components";
import { Title, PageWrapper, Line } from "../../components";
import ExperienceCard from "./ExperienceCard";
import ExperienceList from "./ExperienceList";

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isDesktop ? "center" : "flex-start")};
  justify-content: ${props => (props.isDesktop ? "center" : "flex-start")};
`;
class Experience extends Component {
  render() {
    const isDesktop = window.matchMedia("(min-width: 900px)").matches;
    return (
      <PageWrapper>
        <Title>Experience </Title>
        <ExperienceWrapper isDesktop={isDesktop}>
          <Line up />
          <Line />
          {ExperienceList.map((item, indx) => {
            let left = false;
            let right = false;
            if (indx % 2 && isDesktop) {
              left = true;
            } else {
              right = true;
            }
            return (
              <ExperienceCard
                key={"experience" + indx}
                right={right}
                left={left}
                item={item}
                isDesktop={isDesktop}
              />
            );
          })}
          <Line />
          <Line down />
        </ExperienceWrapper>
      </PageWrapper>
    );
  }
}

export default Experience;
