import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
`;

const StyleBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || "blue"};

  &:hover {
    transform: translateY(-20px);
  }
`;

export default function StyledComponent() {
  return (
    <div>
      <h1>Styled-component</h1>
      <StyledContainer>
        <StyleBox bgColor="red">1</StyleBox>
        <StyleBox bgColor="orange">2</StyleBox>
        <StyleBox bgColor="yellow">3</StyleBox>
      </StyledContainer>
    </div>
  );
}
