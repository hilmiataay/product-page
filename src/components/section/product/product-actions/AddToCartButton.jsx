import React, { useState } from 'react';
import styled from 'styled-components';

// Styled button component
const AddtoCartBtn = styled.button`
  font-size: 18px;
  font-weight: 500;
  padding: 16px 50px;
  color: ${({ disabled }) => disabled ? '#ccc' : '#E73C17'}; // Gray if disabled, orange if enabled
  border: 1px solid ${({ disabled }) => disabled ? '#ccc' : '#E73C17'}; // Different border color if disabled
  background-color: #fff;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'}; // Different cursor if disabled

  &:hover {
    background-color: ${({ disabled }) => disabled ? '#fff' : '#F4F5F8'}; // Background color doesn't change if disabled
  }

  &:focus {
    outline: none;
    color: #fff;
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
    padding: 6px 27px;
    font-size: 12px;
}
`;

// Main component
export default function AddToCartButton({ onClick, quantity }) {
  const [addedToCart, setAddedToCart] = useState(false); // Whether the item is added to cart

  // When the button is clicked
  const handleClick = () => {
    // If there is stock and it's not already added
    if (quantity > 0 && !addedToCart) {
      onClick(quantity); // Pass the quantity added to cart through onClick
      setAddedToCart(true); // Update the added to cart state
    }
  };

  return (
    <AddtoCartBtn onClick={handleClick} disabled={quantity === 0 || addedToCart}>
      {/* If added to cart, display 'Added to Cart', if out of stock, display 'Out of Stock', otherwise 'Add to Cart' */}
      {addedToCart ? 'Added to Cart' : (quantity === 0 ? 'Out of Stock' : 'Add to Cart')}
    </AddtoCartBtn>
  );
}
