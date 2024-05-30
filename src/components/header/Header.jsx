import React from 'react';
import styled from 'styled-components';
import WelcomeMessage from './WelcomeMessage';
import LanguageCurrencySwitcher from './LanguageCurrencySwitcher';

// Define styles for the Header component
const StyledHeader = styled.header`
  background-color: #2F333A; // Background color
  color: #FFFFFF; // Text color
  display: flex; // Display elements side by side
  justify-content: space-between; // Distribute elements evenly
  height: 60px; // Set height
  align-items: center; // Align items vertically
  font-size: 16px; // Font size
  padding: 0 30px 0 90px; // Padding
  font-weight: 300; // Font weight

  @media (max-width: 767px) {
    display: none; // Hide below 767px
  }
  
`;

export default function Header() {
    return (
        <StyledHeader>
            <WelcomeMessage />
            <LanguageCurrencySwitcher />
        </StyledHeader>
    );
}
