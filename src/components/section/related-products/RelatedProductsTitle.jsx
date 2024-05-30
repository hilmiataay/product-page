import React from 'react';
import styled from 'styled-components';

// Define styled components
const RelatedProductsMainDiv = styled.div`
  text-align: center;
  margin: 50px auto; // Center the component and provide margin

  /* Responsive styles */
  @media (max-width: 992px) {
    margin: 20px auto; // Adjust margin on smaller screens
  }

  @media (max-width: 428px) {
    margin: auto; // Remove margin on even smaller screens
  }
`;

const Title = styled.h2`
  font-size: 32px; // Set the font size for the title
  font-weight: 500; // Set the font weight for the title

  /* Responsive styles */
  @media (max-width: 1024px) {
    font-size: 29px; // Adjust font size on smaller screens
  }

  @media (max-width: 992px) {
    font-size: 25px; // Adjust font size on even smaller screens
  }

  @media (max-width: 767px) {
    font-size: 22px; // Adjust font size on small screens
  }

  @media (max-width: 428px) {
    font-size: 18px; // Further adjust font size on very small screens
    line-height: 22px; // Set line height for better readability
  }
`;

export default function RelatedProductsTitle() {
  return (
    <RelatedProductsMainDiv>
      {/* Title for related products */}
      <Title>Related Products</Title>
    </RelatedProductsMainDiv>
  );
}
