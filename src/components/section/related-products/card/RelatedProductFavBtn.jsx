import React from 'react';
import { MdOutlineFavorite } from "react-icons/md";
import styled from 'styled-components';

// Styled component for the favorite button
const FavBtn = styled.span`
    font-size: 30px;
    cursor: pointer;

    /* Responsive font sizes */
    @media (max-width: 1024px) {
      font-size: 28px;
    }
    
    @media (max-width: 992px) {
      font-size: 24px;
    }
    
    @media (max-width: 767px) {
      font-size: 19px;
    }

    @media (max-width: 428px) {
      font-size: 15px;
    }
`;

export default function RelatedProductFavBtn({ product, toggleFavorite }) {
  return (
    <FavBtn onClick={() => toggleFavorite(product.id)}>
      {/* Toggle favorite icon based on product's favorite status */}
      <MdOutlineFavorite style={{ color: product.isFavorite ? 'rgba(231, 60, 23, 1)' : '#c5c5c5' }} />
    </FavBtn>
  );
}
