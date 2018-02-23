import styled from "styled-components";

const Line = styled.div`
  width: 6px;
  height: ${props => (props.height ? props.height : "60px")};
  background-color: #898989;
  border-radius: ${props => {
    if (props.up) {
      return "3px 3px 0px 0px";
    }
    if (props.down) {
      return "0px 0px 3px 3px";
    }
    return "0px";
  }};
`;

export default Line;
