// ProductSize.js
import React, { useState } from 'react';
import styled from 'styled-components';
import productData from '../../../../productData.json';

// Define styled components
const SizesContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 428px) {
    margin-top: 0px;
  }
`;

const SizeBox = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  padding: 14px 0px;
  cursor: pointer;
  width: 33.33%;
  font-weight: 300;
  color: hsla(0, 0%, 44%, 1);
  text-align: center;
  border: 1px solid white;
  font-size: 18px;

  &:hover {
    color: #E73C17;
    font-weight: 500;
  }

  &.activeSize {
    border: 1px solid #E73C17;
    color: #E73C17;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    width: 21%;
    padding: 7px 18px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    width: 23%;
    padding: 5px 0px;
  }

  @media (max-width: 510px) {
    font-size: 13px;
    width: 26%;
    padding: 5px 0px;
  }

  @media (max-width: 428px) {
    font-size: 12px;
    width: 24%;
  }

  @media (max-width: 390px) {
    font-size: 11px;
    width: 33%;
  }
`;

export default function ProductSize() {
  const product = productData[0];
  const [activeSize, setActiveSize] = useState(null);

  // Function to handle size click
  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <SizesContainer>
      {product.sizes.map((size, index) => (
        <SizeBox
          key={index}
          className={activeSize === size ? 'activeSize' : ''}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </SizeBox>
      ))}
    </SizesContainer>
  );
}
