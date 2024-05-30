import React from 'react';
import styled from 'styled-components';

// Styled container for the buy now button
const BuyNowButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

// Styled button for buy now
const BuyNowButton = styled.button`
font-size: 18px; // Font size
font-weight: 500; // Font weight
color: #fff; // Text color
border: none; // No border
background-color: #E73C17; // Background color
padding: 8px 30px; // Padding

  &:hover {
    transition: 1s;
    background-color: #b83518; // Darker background color on hover
  }

&:focus {
    outline: none; // Remove focus outline
    color: #E73C17; // Text color on focus
    transition: 1s;
    border: 1px solid #E73C17; // Border on focus
    background-color: #fff; // Background color on focus
  }

@media (max-width: 1200px) {
    font-size: 17px; // Font size for smaller screens
    padding: 13px 50px; // Padding for smaller screens
}

@media (max-width: 767px) {
    font-size: 14px; // Font size for even smaller screens
    padding: 10px 38px; // Padding for even smaller screens
}

@media (max-width: 428px) {
    padding: 6px 37px; // Padding for smallest screens
    font-size: 12px; // Font size for smallest screens
}
`;

export default function CartBuyNowBtn() {
  return (
    <BuyNowButtonContainer>
        <BuyNowButton>Buy Now</BuyNowButton>
    </BuyNowButtonContainer>
  );
}
