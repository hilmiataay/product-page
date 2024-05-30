import React, { useState } from 'react';
import styled from 'styled-components';

// Styled component for the email input
const StyledInput = styled.input`
    padding: 13px;
    font-size: 19px;
    width: 350px;
    font-weight: 400;

    &:focus {
      outline: none;
      border: none;
    }

    @media (max-width: 1200px) {
        font-size: 18px;
        width: 300px;
        padding: 12px;
      }

    @media (max-width: 1024px) {
        font-size: 17px;
        width: 280px;
      }
    
      @media (max-width: 992px) {
        font-size: 14px;
        padding: 11px 40px;
        width: 250px;
      }

      @media (max-width: 767px) {
        font-size: 13px;
        padding: 12px 30px;
        width: 100%;
      }

    @media (max-width: 428px) {
        font-size: 10px;
        padding: 8.5px 0px;
        width: 190px;
        padding-left: 10px;
      }
`;

export default function EmailInput() {
    const [email, setEmail] = useState('');

    return (
        <div>
            <StyledInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    );
}