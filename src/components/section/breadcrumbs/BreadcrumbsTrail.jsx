import React from 'react';
import styled from 'styled-components';

// Styled breadcrumbs component with defined styles
const StyledBreadcrumbs = styled.div`
  font-family: 'Inter', sans-serif; // Font family
  font-weight: 300; // Font weight
  font-size: 18px; // Font size
  line-height: 32px; // Line height
  letter-spacing: 0.2em; // Letter spacing (20% increase)

  @media (max-width: 615px) {
    font-size: 15px; // Adjusted font size for smaller screens
  }

  @media (max-width: 428px) {
    font-size: 10px; // Further adjusted font size for mobile screens
    line-height: normal; // Reset line height for smaller screens
  }
`;

export default function BreadcrumbsTrail() {
  return (
    <StyledBreadcrumbs>
        <span>Home / Product / Tv Collection</span> {/* Render breadcrumb trail */}
    </StyledBreadcrumbs>
  );
}
