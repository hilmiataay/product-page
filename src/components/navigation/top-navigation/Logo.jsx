import React from 'react';
import styled from 'styled-components';

// Styling for the general container
const LogoContainer = styled.div`
font-family: "Inconsolata", monospace; // Font family
font-optical-sizing: auto; // Optical sizing
font-weight: 700; // Font weight
font-style: normal; // Font style
font-variation-settings: "wdth" 100; // Font variation settings
font-size: 48px; // Font size

@media (max-width: 615px) {
  font-size: 35px;
}

@media (max-width: 510px) {
  font-size: 27px;
}

@media (max-width: 428px) {
  font-size: 18px;
}
`;

// Styling for the first span
const FirstSpan = styled.span`
color: #191919; // Color
cursor: pointer; // Pointer cursor

`;

// Styling for the second span
const SecondSpan = styled.span`
  color: red; // Red color
  font-size: 48px; // Font size
  cursor: pointer; // Pointer cursor

  @media (max-width: 428px) {
    font-size: 16px;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
        <FirstSpan>Needus</FirstSpan>
        <SecondSpan>.</SecondSpan>
    </LogoContainer>
  );
}
