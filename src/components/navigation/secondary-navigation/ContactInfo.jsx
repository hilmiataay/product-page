import React from 'react';
import styled from 'styled-components';
import { PiHeadsetFill } from "react-icons/pi";

// Style for the icon
const IconContainer = styled.div`
  color: #E73C17; // Red color for the icon
  font-size: 40px; // Icon size
`;

// Style for horizontally aligning the outer container
const ContactContainer = styled.div`
  display: flex; // Horizontal alignment
  align-items: center; // Vertical centering
  gap: 10px; // Spacing between elements
`;

// Style for the "Contact Us" text
const ContactText = styled.div`
  font-size: 15px; // Font size
  font-weight: 300; // Font weight
`;

// Style for the phone number section
const ContactNumber = styled.div`
  font-weight: 500; // Font weight
  font-size: 18px; // Font size
`;

export default function ContactInfo() {
    return (
        <ContactContainer>
            <IconContainer> {/* Clor for the icon */}
                <PiHeadsetFill />
            </IconContainer>
            <div>
                <ContactText>
                    CONTACT US 24/7 {/* Font size 15px */}
                </ContactText>
                <ContactNumber>
                    +12012987481 {/* Font weight 500 */}
                </ContactNumber>
            </div>
        </ContactContainer>
    )
}
