import React, { Component } from "react";
import { Background } from "../components";
import bg from "../resources/bannerbg.jpg";
import photo from "../resources/photo.jpg";
import MediaQuery from "react-responsive";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";

const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledName = styled.div`
  font-family: "Fredericka the Great", cursive;
  font-size: 40px;
  color: #000000;
`;
const StyledTag = styled.div`
  font-family: "Marvel", sans-serif;
  font-size: 20px;
  color: #000000;
`;
const StyledLine = styled.div`
  width: 180px;
  height: 2px;
  background-color: #898989;
  margin-top: 10px;
  border-radius: 4px;
`;

const StyledAvatar = styled.img`
  width: 208px;
  height: 208px;
  border-radius: 50%;
  border: solid 1px #898989;
  margin-bottom : 20px;
`;

class Intro extends Component {
  renderBackgroundChildren() {
    return (
      <Zoom>
        <StyledIntro>
          <StyledAvatar src={photo} />
          <StyledName>Santhosh Beerelli</StyledName>
          <StyledTag>Passionate Software Developer</StyledTag>
          <StyledLine />
        </StyledIntro>
      </Zoom>
    );
  }

  render() {
    return (
      <MediaQuery minWidth={769}>
        {matches => {
          let bgImage = null;
          if (matches) {
            bgImage = bg;
          }
          return (
            <Background src={bgImage}>
              {this.renderBackgroundChildren()}
            </Background>
          );
        }}
      </MediaQuery>
    );
  }
}

export default Intro;
