import React from 'react';
import styled from 'styled-components';
import CategoryTitle from './CategoryTitle';
import BreadcrumbsTrail from './BreadcrumbsTrail';

// Style for the breadcrumbs container
const BreadcrumbsContainer = styled.div`
  height: 256px; // Height 256px
  background-color: #F4F5F8; // Gray background
  text-align: center; // Center text alignment
  align-items: center; // Center alignment
  display: grid; // Grid display
  justify-content: center; // Center content horizontally

  @media (max-width: 615px) {
    height: 200px; // Adjusted height for smaller screens
  }

  @media (max-width: 428px) {
    height: 72px; // Further adjusted height for mobile screens
  }
`;

export default function Breadcrumbs() {
    return (
        <BreadcrumbsContainer>
            <div>
                <CategoryTitle /> {/* Render category title */}
                <BreadcrumbsTrail /> {/* Render breadcrumbs trail */}
            </div>
        </BreadcrumbsContainer>
    );
}
