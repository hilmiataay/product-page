import React from 'react';
import styled from 'styled-components';

// Styled component for the price
const Price = styled.p`
    font-size: 19px;
    font-weight: 600;

    /* Responsive font sizes */
    @media (max-width: 1024px) {
        font-size: 18px;
    }
    
    @media (max-width: 992px) {
        font-size: 16px;
    }
    
    @media (max-width: 767px) {
        font-size: 14px;
    }

    @media (max-width: 428px) {
        font-size: 12px;
    }
`;

export default function RelatedProductCartPrice({ price }) {
    return (
        <div>
            {/* Displaying the price using the Price styled component */}
            <Price>${price}</Price>
        </div>
    );
}
