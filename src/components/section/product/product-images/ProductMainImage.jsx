import React from 'react';
import styled from 'styled-components';

// Define styled container div for the main image
const MainImageContainer = styled.div`
  width: 100%;
  height: 548px;
  margin-top: 60px; // Add margin-top for spacing
  align-items: center;
  display: flex;
  background-color: hsla(0, 0%, 95%, 1); // Set background color
  position: relative;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    background-color: #fff; // Set background color
  }
`;

// Define styled div for the span
const CaptionContainer = styled.div`
  margin-top: 20px; // Set the margin-top for the div containing the span

  @media (max-width: 767px) {
    text-align: center; // Center align the text on smaller screens
  }
`;

// Define styled span
const Caption = styled.span`
  font-size: 15px; // Set the font size for the span
  color: hsla(0, 0%, 44%, 1);

  @media (max-width: 767px) {
    font-size: 13px; // Adjust font size for smaller screens
  }

  @media (max-width: 428px) {
    font-size: 10px; // Further adjust font size for smaller screens
  }
`;

export default function ProductMainImage({ mainImage }) {
    return (
        <div>
            <MainImageContainer>
                <img src={mainImage} alt="Main Product" style={{ width: '100%', height: 'auto' }} />
            </MainImageContainer>
            <CaptionContainer>
                <Caption>*LG C2 42 (106cm) 4K Smart OLED evo TV</Caption> {/* Add caption */}
            </CaptionContainer>
        </div>
    );
}
