import React from 'react';
import styled from 'styled-components';
import { MdStarRate } from "react-icons/md";
import productData from '../../../../productData.json';

// Styled component for the main product description container
const ProductDescriptionMainDiv = styled.div`
  
`;

// Define styled components for product info spans
const ProductInfoItem = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  @media (max-width: 992px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 18px;
  }

  @media (max-width: 428px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const ProductInfoValue = styled.span`
  font-weight: 300;
  font-size: 18px;

  @media (max-width: 992px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 18px;
  }

  @media (max-width: 428px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

// Styled component for product title
const ProductTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  margin: 10px 0;

  @media (max-width: 992px) {
    font-size: 26px;
    line-height: 38px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 428px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

// Styled component for product info container
const ProductInfo = styled.div`
  display: grid;
  line-height: normal;
`;

// Styled component for product rate icon
const RateIcon = styled(MdStarRate)`
  font-size: 30px;
  color: ${props => props.active ? '#E73C17' : '#D3D3D3'};
  margin: 10px auto 20px auto;

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 767px) {
    font-size: 19px;
  }

  @media (max-width: 428px) {
    font-size: 12px;
  }
`;

// Styled component for product functions list
const ProductFunctionsList = styled.ul`
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  padding-inline-start: 18px;

  @media (max-width: 992px) {
    font-size: 15px;
    line-height: 26px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 24px;
  }

  @media (max-width: 428px) {
    font-size: 11px;
    line-height: 20px;
  }
`;

export default function ProductDescription() {
  // Extract the first product's data
  const product = productData[0];

  // Split the functions items of the product
  const functionLines = product.functions.split('\n');

  return (
    <ProductDescriptionMainDiv>
      <ProductInfo>
        <div>
          <ProductInfoItem>Brand: </ProductInfoItem>
          <ProductInfoValue>{product.brand}</ProductInfoValue>
        </div>
        <div>
          <ProductInfoItem>Model: </ProductInfoItem>
          <ProductInfoValue>{product.model}</ProductInfoValue>
        </div>
        <div>
          <ProductInfoItem>Availability: </ProductInfoItem>
          <ProductInfoValue>{product.availability}</ProductInfoValue>
        </div>
      </ProductInfo>
      <ProductTitle>
        <span>{product.productTitle}</span>
      </ProductTitle>
      <div>
        <RateIcon active="true" />
        <RateIcon active="true" />
        <RateIcon active="true" />
        <RateIcon />
      </div>
      <div>
        <ProductFunctionsList>
          {functionLines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ProductFunctionsList>
      </div>
    </ProductDescriptionMainDiv>
  );
}
