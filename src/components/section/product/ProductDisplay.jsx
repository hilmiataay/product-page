import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductMainImage from './product-images/ProductMainImage';
import ProductThumbnails from './product-images/ProductThumbnails';
import ProductDescription from './product-details/ProductDescription';
import ProductSize from './product-actions/ProductSize';
import ProductPrice from './product-actions/ProductPrice';
import QuantityCounter from './product-actions/QuantityCounter';
import BuyNowButton from './product-actions/BuyNowButton';
import AddToCartButton from './product-actions/AddToCartButton';

// Styled components
const ProductMainDiv = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: grid;
  }
`;

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
    flex-direction
    column;
    grid-template-areas:
      "mainImage"
      "thumbnails";
  }
`;

const ThumbnailsDiv = styled.div`
  @media (max-width: 767px) {
    grid-area: thumbnails;
  }
`;

const MainImageDiv = styled.div`
  @media (max-width: 767px) {
    grid-area: mainImage;
    padding: 0px 30px;
    width: 100vw;
  }
`;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: hsla(0, 0%, 94%, 1);
  margin: 25px auto;

  @media (max-width: 428px) {
    margin: 12px auto;
  }
`;

const StyledHrMobile = styled.hr`
  border: 0;
  height: 1px;
  background: hsla(0, 0%, 94%, 1);
  margin: 25px auto;
  display: none;

  @media (max-width: 428px) {
    display: block
  }
`;

const ProductPriceAndCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;

  @media (max-width: 767px) {
    margin: 12px auto;
  }
`;

// Main component
export default function ProductDisplay({ selectedProduct, toggleCart }) {
  const [mainImage, setMainImage] = useState(selectedProduct ? selectedProduct.img1 : '');
  const [activeThumbnail, setActiveThumbnail] = useState(selectedProduct ? selectedProduct.img1 : '');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedProduct) {
      setMainImage(selectedProduct.img1);
      setActiveThumbnail(selectedProduct.img1);
    }
  }, [selectedProduct]);

  // Handler for thumbnail click
  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setActiveThumbnail(image);
  };

  // Handler for adding item to cart
  const handleAddToCart = (quantity) => {
    toggleCart(selectedProduct.id);
    console.log(`Added ${quantity} items to cart.`);
  };

  return (
    <ProductMainDiv>
      <OuterDiv>
        <ThumbnailsDiv>
          <ProductThumbnails 
            activeThumbnail={activeThumbnail} 
            onThumbnailClick={handleThumbnailClick} 
            product={selectedProduct} 
          />
        </ThumbnailsDiv>
        <MainImageDiv>
          <ProductMainImage mainImage={mainImage} />
        </MainImageDiv>
      </OuterDiv>
      <ProductDescriptionMain>
        <ProductDescription />
        <StyledHr />
        <ProductSize />
        <StyledHr />
        <div>
          <ProductPriceAndCounter>
            <ProductPrice />
            <QuantityCounter setQuantity={setQuantity} />
          </ProductPriceAndCounter>
          <Buttons>
            <BuyNowButton />
            {/* Add to Cart button with quantity and onClick handler */}
            <AddToCartButton onClick={handleAddToCart} quantity={quantity} />
          </Buttons>
          <StyledHrMobile />
        </div>
      </ProductDescriptionMain>
    </ProductMainDiv>
  );
}
