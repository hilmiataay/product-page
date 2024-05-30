import React from 'react';
import SocialMedias from './SocialMedias';
import styled from 'styled-components';

// Styled container for the "About Us" section
const AboutUsContainer = styled.div`
    width: 23%;
`;

export default function AboutUs() {
    return (
        <AboutUsContainer>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet.</p>
            <SocialMedias />
        </AboutUsContainer>
    );
}
