import React, { Component } from "react";
import styled from "styled-components";
import SkillList from "./SkillList";
import * as SkillLogo from "./SkillLogos";
import { LevelStar } from "../../components";
import star from "../../resources/Star.svg";

const StyledSkillWrapper = styled.div`
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledHeader = styled.div`
  font-family: "Fredericka the Great", cursive;
  font-size: 30px;
  color: #000000;
  margin-bottom: 40px;
`;
const StyledText = styled.div`
  font-family: "Marvel", sans-serif;
  font-size: 18px;
  color: #000000;
`;
const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;
const SkillImg = styled.img`
  width: 75px;
  height: 75px;
  filter: grayscale(100%);
  margin-bottom: 10px;
`;

const SkillGrid = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const SkillGridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledProficiency = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StyledStarImg = styled.img`
  width: 6px;
  height: 6px;
`;
const StyledStarText = styled.div`
  font-family: "Marvel", sans-serif;
  font-size: 12px;
  color: #000000;
`;

class Skills extends Component {
  skillRenderer(skill, indx) {
    return (
      <SkillWrapper key={skill.name + indx}>
        <SkillImg src={SkillLogo[skill.icon]} />
        <StyledText>{skill.name}</StyledText>
        <LevelStar level={skill.level} />
      </SkillWrapper>
    );
  }
  render() {
    return (
      <StyledSkillWrapper>
        <StyledHeader>Skills</StyledHeader>
        <SkillGridWrapper>
          <SkillGrid>
            {SkillList.map((skill, indx) => this.skillRenderer(skill, indx))}
          </SkillGrid>
        </SkillGridWrapper>
        <StyledProficiency>
          <StyledStarImg src={star} /> <StyledStarText>Beginner</StyledStarText>
          {"  "}
          ,
          <StyledStarImg src={star} />
          <StyledStarImg src={star} /> <StyledStarText>Moderate</StyledStarText>
          {"  "}
          ,
          <StyledStarImg src={star} />
          <StyledStarImg src={star} />
          <StyledStarImg src={star} /> <StyledStarText>Advanced</StyledStarText>
        </StyledProficiency>
      </StyledSkillWrapper>
    );
  }
}

export default Skills;
