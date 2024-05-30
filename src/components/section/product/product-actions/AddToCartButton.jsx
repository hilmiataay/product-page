import React from 'react';
import styled from 'styled-components';

// Styled component for the "Add to Cart" button
const AddtoCartBtn = styled.button`
  font-size: 18px;
  font-weight: 500;
  color: #E73C17;
  border: 1px solid #E73C17;
  background-color: #fff;
  padding: 16px 50px;

  &:hover {
    transition: 1s;
    background-color: #F4F5F8;
  }

  &:focus {
    outline: none;
    color: #fff;
    transition: 1s;
    background-color: #E73C17;
  }

  @media (max-width: 1200px) {
    font-size: 17px;
    padding: 13px 47px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 10px 38px;
  }

  @media (max-width: 428px) {
    padding: 6px 30px;
    font-size: 12px;
  }
`;

export default function AddToCartButton() {
  return (
    <div>
      <AddtoCartBtn>Add to Cart</AddtoCartBtn>
    </div>
  );
}
