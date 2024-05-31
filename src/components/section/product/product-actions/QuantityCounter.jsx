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

  &:hover {
    background-color: rgba(241, 241, 241, 1);
  }

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

export default function QuantityCounter({ setQuantity }) {
  // Local state for quantity
  const [quantity, setLocalQuantity] = useState(1);

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setLocalQuantity(quantity - 1); // Update local state
      setQuantity(quantity - 1); // Update parent state
    }
  };

  // Increase quantity
  const increaseQuantity = () => {
    setLocalQuantity(quantity + 1); // Update local state
    setQuantity(quantity + 1); // Update parent state
  };

  // Render the quantity counter component
  return (
    <QuantitySelector>
      <QuantityButton onClick={decreaseQuantity}>
        <FaMinus />
      </QuantityButton>
      <QuantityDisplay>
        {quantity}
      </QuantityDisplay>
      <QuantityButton onClick={increaseQuantity}>
        <FaPlus />
      </QuantityButton>
    </QuantitySelector>
  );
}
