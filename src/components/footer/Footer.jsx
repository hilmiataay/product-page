import React from 'react';
import styled from 'styled-components';
import AboutUs from './AboutUs';
import Information from './Information';
import Account from './Account';
import Store from './Store';
import ContactUs from './ContactUs';
import FooterCopyright from './FooterCopyright';

// Main container for the footer
const MainContainer = styled.div`
  background-color: rgba(47, 51, 58, 1);
  color: #fff;
`;

// Container for footer content
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;

  @media (max-width: 992px) {
    display: block;
  }

  /* Styling for footer headings */
  h2 {
    font-size: 24px;
    margin-bottom: 20px;

    @media (max-width: 992px) {
      font-size: 18px;
      border-bottom: 1px solid #fff;
      padding-bottom: 2px;
      width: fit-content;
    }
  
    @media (max-width: 767px) {
      font-size: 14px;
    }

    @media (max-width: 428px) {
      font-size: 11px;
    }
  }

  /* Styling for clickable elements in footer */
  span, li {
    cursor: pointer;

    &:hover {
      padding-left: 3px;
      transition: 1s;
      color: #b7b0b0;
    }
  }

  /* General styling for footer text */
  span, ul, li, p {
    font-size: 15px;
    font-weight: 400;
    list-style-type: none;
    padding-inline-start: 0px;
    line-height: 28px;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

// Horizontal line separator for the footer
const StyledHr = styled.hr`
  opacity: 50%;
  background: rgba(255, 255, 255, 1);
  margin: 50px auto 20px 50px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export default function Footer() {
    return (
        <MainContainer>
            {/* Footer content */}
            <FooterContainer>
                <AboutUs />
                <Information />
                <Account />
                <Store />
                <ContactUs />
            </FooterContainer>
            {/* Horizontal line separator */}
            <StyledHr />
            {/* Footer copyright */}
            <FooterCopyright />
        </MainContainer>
    );
}
