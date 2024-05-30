import React from 'react';
import styled from 'styled-components';

// Styled title component with defined styles
const StyledTitle = styled.h1`
  font-weight: 500; // Font weight
  font-size: 40px; // Font size
  line-height: 48.41px; // Line height

  @media (max-width: 615px) {
    font-size: 33px; // Adjusted font size for smaller screens
  }

  @media (max-width: 428px) {
    font-size: 18px; // Further adjusted font size for mobile screens
    line-height: normal; // Reset line height for smaller screens
  }
`;

export default function CategoryTitle() {
  return (
    <div>
        <StyledTitle>TV Collection</StyledTitle> {/* Render styled title */}
    </div>
  );
}
