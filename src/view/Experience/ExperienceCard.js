import React, { Component } from "react";
import styled from "styled-components";
import { Line } from "../../components";
import Bounce from "react-reveal/Bounce";

const StyledCard = styled.div`
  border-radius: 4px;
  border: solid 1px #e3e3e3;
  background: #f5f5f5;
  width: 400px;
  height: 200px;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
`;

const ExperienceCardWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.left ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  ${props =>
    props.isDesktop
      ? props.left ? "padding-right: 438px;" : "padding-left: 436px;"
      : ""};
`;

const StyledCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #898989;
  ${props => (props.left ? "margin-right: -11px;" : "margin-left: -11px;")};
`;
const StyledHLine = styled.div`
  height: 6px;
  width: 30px;
  background-color: #898989;
`;

const ExperienceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 180px;
`;
const CompanyTitle = styled.div`
  font-family: "Oswald";
  font-size: 24px;
  color: #000000;
`;

const CompanyDate = styled.div`
  font-family: "Roboto";
  font-size: 24px;
  color: #000000;
`;
const CompanyPosition = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  color: #000000;
`;

const ExperienceCard = props => {
  return (
    <ExperienceCardWrapper left={props.left} isDesktop={props.isDesktop}>
      <Line height="240px" />
      <StyledCircle left={props.left} />
      <StyledHLine />
      <Bounce right={props.right} left={props.left}>
        <StyledCard>
          <ExperienceBox>
            <CompanyTitle>{props.item.company}</CompanyTitle>
            <CompanyDate>{props.item.year}</CompanyDate>
            <CompanyPosition>{props.item.position}</CompanyPosition>
          </ExperienceBox>
        </StyledCard>
      </Bounce>
    </ExperienceCardWrapper>
  );
};

export default ExperienceCard;
