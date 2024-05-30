import React, { useState } from 'react';
import styled from 'styled-components';
import ProductMainImage from './product-images/ProductMainImage';
import ProductThumbnails from './product-images/ProductThumbnails';
import ProductDescription from './product-details/ProductDescription';
import ProductSize from './product-actions/ProductSize';
import ProductPrice from './product-actions/ProductPrice';
import QuantityCounter from './product-actions/QuantityCounter';
import BuyNowButton from './product-actions/BuyNowButton';
import AddToCartButton from './product-actions/AddToCartButton';
import productData from '../../../productData.json';

// Styled component for the main product container
const ProductMainDiv = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: grid; // Change to grid layout on smaller screens
  }
`;

// Styled component for the product description main container
const ProductDescriptionMain = styled.div`
  width: 50%;
  padding: 60px 90px 0px 40px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: auto 30px;
    padding: 50px 78px 0px 40px
  }

  @media (max-width: 767px) {
    margin: 15px auto;
    padding: 0px 30px;
  }

  @media (max-width: 428px) {
    padding: 5px 30px;
    width: 100vw;
    margin: 15px auto auto auto;
  }
`;

// Styled component for the outer div containing main image and thumbnails
const OuterDiv = styled.div`
  width: 50%;
  overflow: hidden;
  display: flex;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0px 50px;
  }

  @media (max-width: 767px) {
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    flex-direction: column;
    grid-template-areas:
      "mainImage"
      "thumbnails";
  }
`;

// Styled component for the thumbnails container
const ThumbnailsDiv = styled.div`
  @media (max-width: 767px) {
    grid-area: thumbnails;
  }
`;

// Styled component for the main image container
const MainImageDiv = styled.div`
  @media (max-width: 767px) {
    grid-area: mainImage;
    padding: 0px 30px;
    width: 100vw;
  }
`;

// Styled component for horizontal line
const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: hsla(0, 0%, 94%, 1);
  margin: 25px auto;

  @media (max-width: 428px) {
    margin: 12px auto;
  }
`;

// Styled component for horizontal line (Mobile)
const StyledHrMobile = styled.hr`
  border: 0;
  height: 1px;
  background: hsla(0, 0%, 94%, 1);
  margin: 25px auto;
  display: none;

  @media (max-width: 428px) {
    display: block; // Show the horizontal line on mobile
  }
`;

// Styled component for product price and counter container
const ProductPriceAndCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Styled component for buttons container
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;

  @media (max-width: 767px) {
    margin: 12px auto;
  }
`;

export default function ProductDisplay() {
  const [mainImage, setMainImage] = useState(productData[0].img1);
  const [activeThumbnail, setActiveThumbnail] = useState(productData[0].img1);

  // Function to handle thumbnail click
  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setActiveThumbnail(image);
  };

  return (
    <ProductMainDiv>
      <OuterDiv>
        <ThumbnailsDiv>
          <ProductThumbnails 
            activeThumbnail={activeThumbnail} 
            onThumbnailClick={handleThumbnailClick} 
          />
        </ThumbnailsDiv>
        <MainImageDiv>
          <ProductMainImage mainImage={mainImage} />
        </MainImageDiv>
      </OuterDiv>
      <ProductDescriptionMain>
        <ProductDescription />
        <StyledHr /> {/* Horizontal line */}
        <ProductSize />
        <StyledHr /> {/* Horizontal line */}
        <div>
          <ProductPriceAndCounter>
            <ProductPrice />
            <QuantityCounter />
          </ProductPriceAndCounter>
          <Buttons>
            <BuyNowButton />
            <AddToCartButton />
          </Buttons>
          <StyledHrMobile /> {/* Horizontal line for mobile */}
        </div>
      </ProductDescriptionMain>
    </ProductMainDiv>
  );
}
