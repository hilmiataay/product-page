import React from 'react';
import styled from 'styled-components';
import RelatedProductMessage from './RelatedProductMessage';
import RelatedProductFavBtn from './RelatedProductFavBtn';
import RelatedProductImage from './RelatedProductImage';
import RelatedProductAddToCartBtn from './RelatedProductAddToCartBtn';
import RelatedProductCardTitle from './RelatedProductCardTitle';
import RelatedProductCartPrice from './RelatedProductCartPrice';

// Styled component for the main container of related product cards
const CardMainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 80px;
  justify-content: space-around;

  /* Responsive styles */
  @media (max-width: 767px) {
    padding: 10px 50px; // Adjust padding on smaller screens
  }
`;

// Styled component for the content container of each related product card
const CardContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(24% - 10px);
  max-width: calc(25% - 10px);

  &:hover {
    cursor: pointer;
  }

  /* Responsive styles */
  @media (max-width: 992px) {
    flex: 1 1 calc(32% - 10px);
    max-width: calc(32% - 10px); // Adjust max width on medium screens
  }

  @media (max-width: 767px) {
    flex: 1 1 calc(50% - 10px);
    max-width: calc(50% - 10px); // Adjust max width on smaller screens
  }
`;

// Styled component for the container of each related product card
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(241, 241, 241, 1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-bottom: 20px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
  }
`;

// Styled component for the top section of each related product card
const CardTopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

// Styled component for the bottom section of each related product card
const CardBottomBox = styled.div`
  text-align: center;
`;

export default function RelatedProductsCards({ currentProducts, toggleFavorite, toggleCart }) {
  return (
    <CardMainDiv>
      {currentProducts.map((product, index) => (
        <CardContainerContent key={index}>
          <CardContainer>
            {/* Related product message */}
            <CardTopDiv>
              <RelatedProductMessage message={product.message} />
              {/* Favorite button */}
              <RelatedProductFavBtn product={product} toggleFavorite={toggleFavorite} />
            </CardTopDiv>
            {/* Product image */}
            <RelatedProductImage src={product.img1} title={product.title} />
            {/* Add to cart button */}
            <RelatedProductAddToCartBtn product={product} toggleCart={toggleCart} />
          </CardContainer>
          <CardBottomBox>
            {/* Product title */}
            <RelatedProductCardTitle title={product.title} />
            {/* Product price */}
            <RelatedProductCartPrice price={product.price} />
          </CardBottomBox>
        </CardContainerContent>
      ))}
    </CardMainDiv>
  );
}
