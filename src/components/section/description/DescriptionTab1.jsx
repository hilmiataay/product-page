import React from 'react';
import { styled } from 'styled-components';

// Styled component for the description paragraph
const DescParag = styled.div`
        line-height: 30px; // Line height for better readability
        font-weight: 300; // Light font weight
        font-size: 18px; // Default font size

        @media (max-width: 1024px) {
            font-size: 16px; // Decrease font size on smaller screens
            line-height: 27px; // Adjust line height
          }
        
          @media (max-width: 992px) {
            font-size: 14px; // Further decrease font size for tablets
            line-height: 22px; // Adjust line height
          }
        
          @media (max-width: 767px) {
            font-size: 12px; // Smaller font size for mobile devices
            line-height: 18px; // Adjust line height
          }

        @media (max-width: 428px) {
            font-size: 10px; // Even smaller font size for small mobile screens
            line-height: 15px; // Adjust line height
          }
    `;

export default function DescriptionTab1() {

    return (
        <DescParag>
            <p>The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers.</p>
            <p>*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.</p>
            <p>**65C2 Stand model is at a minimum 39% lighter than the C1 series. More...</p>
        </DescParag>
    )
}
