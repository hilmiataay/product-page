import React from 'react';
import styled from 'styled-components';
import JoinUsMessage from './JoinUsMessage';
import EmailInput from './EmailInput';
import SubscribeButton from './SubscribeButton';

// Styled component for the row containing subscription elements
const SubscribeRow = styled.div`
    position: relative;
    background-image: url('${process.env.PUBLIC_URL}/images/newsletter/desk.png'); // Background image for the row
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    padding: 35px 50px;

    @media (max-width: 992px) {
        display: grid; // Change to grid layout on smaller screens
        gap: 10px;
        padding: 20px 30px;
      }
`;

// Styled component for the form container
const FormContainer = styled.div`
    display: flex;
    align-items: center;
`;

export default function NewsletterSubscription() {
    return (
        <SubscribeRow>
            <JoinUsMessage /> {/* Component for the message inviting to join the newsletter */}
            <FormContainer>
                <EmailInput /> {/* Component for the email input */}
                <SubscribeButton /> {/* Component for the subscribe button */}
            </FormContainer>
        </SubscribeRow>
    );
}