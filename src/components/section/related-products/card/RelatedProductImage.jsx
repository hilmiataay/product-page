import React from 'react';
import styled from 'styled-components';

// Styled components for the image container and the image itself
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px; /* You can adjust the height as needed */
  overflow: hidden;
  margin: 20px auto; /* You can adjust the margin as needed */

  /* Responsive adjustments */
  @media (max-width: 767px) {
    height: 170px;
    margin: 10px auto;
  }

  @media (max-width: 428px) {
    height: 100px;
    margin: auto auto 10px auto;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 75%; /* You can adjust the maximum width as needed */
  max-height: 100%; /* You can adjust the maximum height as needed */
`;

export default function RelatedProductImage({ src, title }) {
  return (
    <ImageContainer>
      <StyledImage src={src} alt={title} />
    </ImageContainer>
  );
}
