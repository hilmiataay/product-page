import React from 'react';
import styled from 'styled-components';

// Styled component for the message container
const JoinUsMessageContainer = styled.div`
    color: #fff;
`;

// Styled component for the title of the message
const JoinUsTitle = styled.h2`
    font-size: 28px;
    font-weight: 500;

    @media (max-width: 1200px) {
        font-size: 26px;
      }

    @media (max-width: 1024px) {
        font-size: 23px;
      }
    
      @media (max-width: 992px) {
        font-size: 20px;
      }
    
      @media (max-width: 767px) {
        font-size: 18px;
      }

    @media (max-width: 428px) {
        font-size: 15px;
      }
`;

// Styled component for the subtitle
const Subtitle = styled.span`
    font-size: 20px;
    font-weight: 400;

    @media (max-width: 1200px) {
        font-size: 19px;
      }

    @media (max-width: 1024px) {
        font-size: 18px;
      }
    
      @media (max-width: 992px) {
        font-size: 17px;
      }
    
      @media (max-width: 767px) {
        font-size: 15px;
      }

    @media (max-width: 428px) {
        font-size: 14px;
      }
`;

export default function JoinUsMessage() {
    return (
        <JoinUsMessageContainer>
            <JoinUsTitle>Join our newsletter and get offers</JoinUsTitle> {/* Title of the message */}
            <Subtitle>Sign up our newsletter</Subtitle> {/* Subtitle */}
        </JoinUsMessageContainer>
    );
}