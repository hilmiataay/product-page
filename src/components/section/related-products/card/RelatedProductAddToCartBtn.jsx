import React, { useState, useEffect } from 'react';
import { SlBasket } from "react-icons/sl";
import styled from 'styled-components';

// Styled component for the main container of the add to cart button
const AddToCartButtonMain = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px auto 50px auto;

    /* Responsive styles */
    @media (max-width: 767px) {
      margin: 5px auto 25px auto; // Adjust margin on smaller screens
    }

    @media (max-width: 428px) {
        margin: auto auto 20px auto; // Adjust margin on extra small screens
      }
`;

// Styled component for the add to cart button itself
const AddToCartButton = styled.button`
  background-color: rgba(255, 255, 255, 1);
  color: rgba(111, 111, 111, 1);
  border: 2px solid rgba(255, 255, 255, 1);
  padding: 13px 50px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 10px;

  &:hover {
    background-color: rgb(232 227 227);
  }

  &:focus {
    outline: 2px solid rgb(232 227 227);
    border: none;
  }

  /* Responsive styles */
  @media (max-width: 1200px) {
    font-size: 16px;
    padding: 10px 35px;
    gap: 5px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
    padding: 10px 35px;
  }

  @media (max-width: 550px) {
    font-size: 11px;
    padding: 9px 25px;
  }

  @media (max-width: 428px) {
    font-size: 9px;
    padding: 7px 17px;
  }
`;

// Styled component for the icon wrapper
const IconWrapper = styled.span`
  margin-right: 5px;
`;

export default function RelatedProductAddToCartBtn({ product, toggleCart, isInCart }) {
    const [inCart, setInCart] = useState(isInCart);

    useEffect(() => {
        setInCart(isInCart);
    }, [isInCart]);

    // Function to handle button click
    const handleButtonClick = () => {
        toggleCart(product.id);
        setInCart(!inCart);
    };

    return (
        <AddToCartButtonMain onClick={handleButtonClick}>
            {/* Add to cart button */}
            <AddToCartButton>
                {/* Icon */}
                <IconWrapper>
                    <SlBasket />
                </IconWrapper>
                {/* Text */}
                {inCart ? 'Remove' : 'Add to Cart'}
            </AddToCartButton>
        </AddToCartButtonMain>
    );
}
