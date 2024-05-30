import React from 'react';
import styled from 'styled-components';

// Styled component for the container of the title
const TitleBox = styled.div`
  text-align: center;
`;

// Styled component for the title itself
const Title = styled.h4`
  font-size: 19px;
  font-weight: 400;

  /* Responsive font sizes */
  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 428px) {
    font-size: 11px;
  }
`;

export default function RelatedProductCardTitle({ title }) {
  return (
    <TitleBox>
      {/* Title component */}
      <Title>{title}</Title>
    </TitleBox>
  );
}
