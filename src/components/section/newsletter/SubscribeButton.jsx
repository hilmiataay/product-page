import React, { useState } from 'react';
import styled from 'styled-components';

// Styled component for the subscribe button
const Button = styled.button`
    background-color: ${props => props.$subscribed ? 'rgba(231, 60, 23, 1)' : '#f44336'};
    color: white;
    padding: 13px 50px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 19px;

    &:hover {
        background-color: ${props => props.$subscribed ? 'rgba(231, 60, 23, 1)' : 'rgb(191 38 5)'};
    }

    &:focus {
        outline: none;
        border: none;
    }

    @media (max-width: 1200px) {
        font-size: 18px;
    }

    @media (max-width: 1024px) {
        font-size: 17px;
    }
    
    @media (max-width: 992px) {
        font-size: 16px;
        padding: 11px 40px;
    }

    @media (max-width: 428px) {
        font-size: 12px;
        padding: 8px 23px;
    }
`;

export default function SubscribeButton() {
    const [subscribed, setSubscribed] = useState(false);

    const handleClick = () => {
        setSubscribed(true);
    };
    
    return (
        <div>
            <Button type="button" $subscribed={subscribed} onClick={handleClick}>
                {subscribed ? 'Subscribed!' : 'Subscribe'}
            </Button>
        </div>
    );
}