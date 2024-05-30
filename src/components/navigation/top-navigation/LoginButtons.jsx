import React from 'react';
import styled from 'styled-components';

// Styled container for login buttons
const LoginButtonsContainer = styled.div`
span {
    cursor: pointer; // Make cursor pointer for better interaction
}
`;

// Styled divider element
const Divider = styled.span`
  border-right: 1px solid #ccc; // Vertical line
  margin: 0 10px; // Spacing
`;

export default function LoginButtons() {
    return (
        <LoginButtonsContainer>
            {/* Login button */}
            <span>Login</span>
            {/* Divider */}
            <Divider />
            {/* Signup button */}
            <span>Signup</span>
        </LoginButtonsContainer>
    );
}
