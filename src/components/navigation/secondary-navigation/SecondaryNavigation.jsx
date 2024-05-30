import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';
import ContactInfo from './ContactInfo';
import CategoryNav from '../top-navigation/CategoryNav';
import { GrMenu } from "react-icons/gr";

// Styled component for the horizontal container
const HorizontalContainer = styled.div`
  display: flex; // Horizontal alignment
  align-items: center; // Vertical alignment
`;

// Styled component for the category navigation section
const StyledCategoryNav = styled.div`
  flex: 0 0 23.5%; // Section width
  background-color: #E73C17; // Background color
  color: white; // Text color
  height: 76px; // Height
  padding: 10px; // Padding
  display: flex; // Flex display
  justify-content: center; // Horizontal centering
  align-items: center; // Vertical centering
  font-weight: 500; // Font weight
  gap: 10px; // Gap between elements

  @media (max-width: 1150px) {
    flex: 0 0 10%; // Adjusted width for smaller screens
  }

  @media (max-width: 767px) {
    position: absolute; // Absolute positioning for smaller screens
    top: 60px; // Top position
    width: 60px; // Width
    height: 60px; // Height
    left: 33px; // Left position
  }

  @media (max-width: 615px) {
    width: 47px; // Adjusted width for smaller screens
    height: 47px; // Adjusted height for smaller screens
    top: 66px; // Adjusted top position for smaller screens
    left: 18px; // Adjusted left position for smaller screens
  }

  @media (max-width: 428px) {
    width: 40px; // Adjusted width for smallest screens
    height: 40px; // Adjusted height for smallest screens
    left: 17px; // Adjusted left position for smallest screens
    top: 19px; // Adjusted top position for smallest screens
  }
`;

// Styled component for the category icon wrapper
const CategoryIconWrapper = styled.span`
  font-size: 18px; // Font size
  cursor: pointer; // Cursor type
`;

// Styled component for the category navigation text
const CategoryNavText = styled.div`
  @media (max-width: 1150px) {
    display: none; // Hide for smaller screens
  }
`;

// Styled component for the secondary navigation category box
const SecNavCategoryBox = styled.div`
  position: relative; // Relative positioning
`;

// Styled component for the navigation items container
const NavItemsContainer = styled.div`
  flex: 0 0 57.5%; // Section width
  height: 76px; // Height
  background-color: #2F333A; // Background color
  color: white; // Text color
  align-items: center; // Vertical alignment
  display: flex; // Flex display

  @media (max-width: 1150px) {
    flex: 0 0 90%; // Adjusted width for smaller screens
  }

  @media (max-width: 767px) {
    display: none; // Hide for mobile screens
  }
`;

// Styled component for the contact information container
const ContactInfoContainer = styled.div`
  flex: 0 0 19%; // Section width
  height: 76px; // Height
  background-color: #2F333A; // Background color
  color: white; // Text color
  align-items: center; // Vertical alignment
  display: flex; // Flex display
  margin-left: 2px; // Left margin
  padding-left: 15px; // Left padding

  @media (max-width: 1150px) {
    flex: 0 0 25%; // Adjusted width for smaller screens
  }

  @media (max-width: 992px) {
    display: none; // Hide for smaller screens
  }
`;

export default function SecondaryNavigation() {
  return (
    <HorizontalContainer>
      {/* Category navigation section */}
      <StyledCategoryNav>
        <CategoryIconWrapper>
          <GrMenu />
        </CategoryIconWrapper>
        <CategoryNavText>
          <SecNavCategoryBox>
            <CategoryNav />
          </SecNavCategoryBox>
        </CategoryNavText>
      </StyledCategoryNav>
      {/* Navigation items container */}
      <NavItemsContainer>
        <NavItems />
      </NavItemsContainer>
      {/* Contact information container */}
      <ContactInfoContainer>
        <ContactInfo />
      </ContactInfoContainer>
    </HorizontalContainer>
  );
}
