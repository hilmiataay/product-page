import React from 'react';
import styled from 'styled-components';
import productData from '../../../../productData.json';

// Define styled components
const Currency = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }

  @media (max-width: 428px) {
    font-size: 10px;
  }
`;

const DiscountedPrice = styled.span`
  font-size: 32px;
  line-height: 40px;

  @media (max-width: 1200px) {
    font-size: 29px;
  }

  @media (max-width: 992px) {
    font-size: 26px;
  }

  @media (max-width: 767px) {
    font-size: 22px;
  }

  @media (max-width: 428px) {
    font-size: 16px;
  }
`;

const Price = styled.span`
  font-size: 24px;
  color: hsla(0, 0%, 85%, 1);
  margin-left: 10px; // Optional: Add some space between discounted price and original price

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 992px) {
    font-size: 19px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }

  @media (max-width: 428px) {
    font-size: 13px;
  }
`;

export default function ProductPrice() {
  const product = productData[0];

  // Calculate discount
  const discountedPrice = product.discount ? product.price * (100 - parseFloat(product.discount.slice(1))) / 100 : product.price;

  // Function to determine the discounted or original price
  const renderPrice = () => {
    if (product.discount) {
      return (
        <>
          <br />
          <DiscountedPrice>${discountedPrice.toFixed(2)}</DiscountedPrice>
          <Price><del>${product.price}</del></Price>
          <br />
        </>
      );
    } else {
      return <Price>${product.price}</Price>;
    }
  };

  return (
    <div>
      <Currency>USD (incl. of all taxes)</Currency>
      {renderPrice()}
    </div>
  );
}
