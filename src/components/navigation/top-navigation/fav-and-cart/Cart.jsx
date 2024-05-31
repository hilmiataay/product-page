import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SlBasket } from "react-icons/sl";
import CartBuyNowBtn from './CartBuyNowBtn';

// Styled cart icon
const StyledCartIcon = styled(SlBasket)`
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 615px) {
    font-size: 21px;
  }

  @media (max-width: 428px) {
    font-size: 20px;
  }
`;

// Styled component for cart count
const CartCount = styled.span`
  font-size: 14px;
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #E73C17;
  color: white;
  border-radius: 50%; 
  padding: 6px; 
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 22px;
  width: 22px;
  cursor: pointer;

  @media (max-width: 615px) {
    font-size: 12px;
    top: -4px;
    height: 18px;
    width: 18px;
    padding: 5px;
  }

  @media (max-width: 428px) {
    font-size: 10px;
    top: -1px;
    right: -6px;
    padding: 4px;
    height: 16px;
    width: 16px;
  }
`;

// Styled component for cart list container
const CartListContainer = styled.div`
  position: absolute;
  top: 52px;
  right: 0;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 2px 8px 0 #63636333;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 1000;

  @media (max-width: 428px) {
    width: 250px;
  }
`;

// Styled component for cart item
const CartItem = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f9f9f9;
  }
`;

// Styled component for cart item image
const CartItemImage = styled.img`
  width: 80px;
  height: auto;
  margin-right: 10px;

  @media (max-width: 428px) {
    width: 65px;
  }
`;

// Styled component for cart item details
const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

// Styled component for cart item title
const CartItemTitle = styled.div`
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 428px) {
    font-size: 11px;
  }
`;

// Styled component for cart item price
const CartItemPrice = styled.div`
  font-size: 15px;
  color: #888;

  @media (max-width: 428px) {
    font-size: 11px;
  }
`;

// Styled component for buy now button container
const BuyNowButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 428px) {
    padding: 0px;
  }
`;

export default function Cart({ cartCount, products }) {
  const [showCarts, setShowCarts] = useState(false);
  const containerRef = useRef(null);

  // Function to toggle cart visibility
  const handleToggleCarts = () => {
    setShowCarts(!showCarts);
  };

  // Function to handle click outside the cart
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowCarts(false);
    }
  };

  useEffect(() => {
    if (showCarts) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCarts]);

  // Filter products that are in the cart
  const cartProducts = products.filter(product => product.isCart);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* Cart icon with count */}
      <div onClick={handleToggleCarts}>
        <StyledCartIcon /> {/* Styled icon */}
        <CartCount>{cartCount}</CartCount>
      </div>
      {/* Render cart list if showCarts is true */}
      {showCarts && (
        <CartListContainer>
          {/* Map through cartProducts and render cart items */}
          {cartProducts.map((product) => (
            <CartItem key={product.id} href="#">
              <CartItemImage src={product.img1} alt={product.title} />
              <CartItemDetails>
                <CartItemTitle>{product.title}</CartItemTitle>
                <CartItemPrice>${product.price}</CartItemPrice>
              </CartItemDetails>
            </CartItem>
          ))}
          {/* Render buy now button if there are items in the cart */}
          {cartProducts.length > 0 && (
            <BuyNowButtonContainer onClick={handleToggleCarts}>
              <CartBuyNowBtn />
            </BuyNowButtonContainer>
          )}
        </CartListContainer>
      )}
    </div>
  );
}
