import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";

// Styled component for horizontally aligning the menu and removing bullet points
const StyledNav = styled.div`
  width: 100%;
  padding: 0 15%;
  font-family: "Inter", sans-serif; // Specific font family
  font-optical-sizing: auto; // Optical sizing
  font-weight: 400; // Font weight
  font-style: normal; // Font style
  font-variation-settings: "slnt" 0; // Font variation settings

  ul {
    display: flex; // Horizontal alignment
    list-style: none; // Remove bullet points
    padding: 0; // Remove extra padding
    margin: 0; // Remove extra margin
    justify-content: space-between; // Equal distribution
    width: 100%; // Take up full width of container
  }
  
  li {
    display: flex; // Display icons and text side by side
    align-items: center; // Vertical centering
    font-size: 16px; // Font size for text
    gap: 3px; // Gap between elements
    cursor: pointer; // Pointer cursor

    &:hover {
      color: #E73C17; // Change color on hover
    }
  }
`;

// Styled component for the arrow icons
const StyledArrowIcon = styled(IoIosArrowDown)`
  font-size: 20px; // Icon size
`;

// Styled component for the arrow icons
const ActiveNavItem = styled.span`
  color: #E73C17;
`;

export default function NavItems() {
  return (
    <StyledNav>
      <ul>
        {/* List items */}
        <li>
          <span>Home </span>
          <StyledArrowIcon /> {/* Arrow icon */}
        </li>
        <li>
          <span>About </span>
          <StyledArrowIcon />
        </li>
        <ActiveNavItem>
          <span>Product </span>
          <StyledArrowIcon />
        </ActiveNavItem>
        <li>
          <span>Pages </span>
          <StyledArrowIcon />
        </li>
        <li>
          <span>Contact </span>
          <StyledArrowIcon />
        </li>
      </ul>
    </StyledNav>
  );
}
