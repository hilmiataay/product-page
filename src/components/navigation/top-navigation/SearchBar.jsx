import React from 'react';
import { IoIosSearch } from "react-icons/io";
import styled from 'styled-components';

// Flex structure and style for the main container
const SearchContainer = styled.div`
  display: flex; // Horizontal alignment
  align-items: center; // Align items vertically
  padding: 4px; // Inner padding
  border-radius: 5px; // Rounded corners
  width: 100%;
`;

// Style for the search icon
const SearchIcon = styled.span`
  background-color: #343a40; // Background color
  border-radius: 0; // Circular shape
  display: flex; // Center the icon
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  margin-left: 5px; // Spacing between icon and input
  font-size: 24px;
  color: white;
  padding: 20px;
  cursor: pointer;
`;

// Style for the input control
const StyledInput = styled.input`
  font-size: 20px; // Font size of the input control
  border: none; // Remove borders
  outline: none; // Remove outline when focused
  flex: 1; // Fill the remaining space of the container
  color: #969696;
`;

export default function SearchBar() {
    return (
        <SearchContainer>
            {/* Input for searching products */}
            <StyledInput
                type="text"
                placeholder="Search Products"
                aria-label="Search"
            />
            {/* Search icon */}
            <SearchIcon>
                <IoIosSearch />
            </SearchIcon>
        </SearchContainer>
    );
}
