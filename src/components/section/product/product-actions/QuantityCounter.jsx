import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from "react-icons/fa";

// Define styled components
const QuantitySelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  border: 1px solid hsla(0, 0%, 94%, 1);
  width: 180px;
  height: 60px;

  /* Responsive styles */
  @media (max-width: 1200px) {
    width: 165px;
    height: 55px;
  }

  @media (max-width: 767px) {
    width: 135px;
    height: 45px;
  }

  @media (max-width: 428px) {
    width: 120px;
    height: 40px;
  }
`;

const QuantityButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 22px;
  cursor: pointer;
  border-right: 1px solid hsla(0, 0%, 94%, 1); // Add right border

  /* Hover effect */
  &:hover {
    background-color: rgba(241, 241, 241, 1);
  }

  /* Responsive styles */
  @media (max-width: 1200px) {
    font-size: 17px;
  }

  @media (max-width: 992px) {
    font-size: 15px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }

  @media (max-width: 428px) {
    font-size: 10px;
  }
`;

const QuantityDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 32px;
  border-right: 1px solid hsla(0, 0%, 94%, 1); // Add right border

  /* Responsive styles */
  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 992px) {
    font-size: 26px;
  }

  @media (max-width: 767px) {
    font-size: 21px;
  }

  @media (max-width: 428px) {
    font-size: 18px;
  }
`;

export default function QuantityCounter() {
  const [quantity, setQuantity] = useState(1);

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <QuantitySelector>
      {/* Button to decrease quantity */}
      <QuantityButton onClick={decreaseQuantity}>
        <FaMinus />
      </QuantityButton>

      {/* Quantity display */}
      <QuantityDisplay>
        {quantity}
      </QuantityDisplay>

      {/* Button to increase quantity */}
      <QuantityButton onClick={increaseQuantity}>
        <FaPlus />
      </QuantityButton>
    </QuantitySelector>
  );
}
