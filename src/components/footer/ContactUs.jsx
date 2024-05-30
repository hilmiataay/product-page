import React from 'react';
import styled from 'styled-components';
import { SlLocationPin } from "react-icons/sl";
import { MdPhoneAndroid } from "react-icons/md";

// Styled container for icons
const IconContainer = styled.div`
    display: grid;
    gap: 10px;
`;

// Styled icon
const Icon = styled.span`
    font-size: 28px !important;
    margin-right: 10px;
`;

// Component for displaying contact information
export default function ContactUs() {
    return (
        <div>
            <h2>Contact</h2>
            <p>If you have any query, please contact us</p>
            <p>needus24@gmail.com</p>
            <IconContainer>
                <div>
                    <Icon><SlLocationPin /></Icon>
                    <span>California, USA</span>
                </div>
                <div>
                    <Icon><MdPhoneAndroid /></Icon>
                    <span>+12012987481</span>
                </div>
            </IconContainer>
        </div>
    );
}
