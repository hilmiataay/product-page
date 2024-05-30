import React from 'react';
import styled from 'styled-components';

// Styled component for the "Buy Now" button
const BuyNowBtn = styled.button`
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    border: none;
    background-color: #E73C17;
    padding: 16px 65px;

    &:hover {
        transition: 1s;
        background-color: #b83518;
      }

    &:focus {
        outline: none;
        color: #E73C17;
        transition: 1s;
        border: 1px solid #E73C17;
        background-color: #fff;
      }

    @media (max-width: 1200px) {
        font-size: 17px;
        padding: 13px 50px;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        padding: 10px 38px;
    }

    @media (max-width: 428px) {
        padding: 6px 37px;
        font-size: 12px;
    }
`;

export default function BuyNowButton() {

    return (
        <div>
            <BuyNowBtn>Buy Now</BuyNowBtn>
        </div>
    )
}
