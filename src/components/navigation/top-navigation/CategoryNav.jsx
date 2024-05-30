import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import styled from 'styled-components';

// Styled component for the category button
const CategoryButton = styled.div`
  display: flex; // Horizontal alignment
  align-items: center; // Vertical alignment
  cursor: pointer; // Make cursor clickable
`;

// Styled component for the submenu
const SubMenu = styled.div`
background-color: #fff; // Background color
border-bottom-left-radius: 5px; // Rounded corners
border-bottom-right-radius: 5px; // Rounded corners
box-shadow: 0 2px 8px 0 #63636333; // Box shadow
display: grid; // Grid layout
letter-spacing: 1px; // Letter spacing
top: 51px; // Position from top
left: 0; // Position from left
padding: 15px 30px; // Padding
position: absolute; // Absolute positioning
width: 250px; // Width
z-index: 1; // z-index for stacking order
`;

// Styled component for the submenu items
const SubMenuItem = styled.span`
    border-bottom: 1px solid #ccc; // Bottom border
    line-height: 50px; // Line height
    padding-bottom: 5px; // Bottom padding
    font-size: 18px; // Font size
    color: black; // Text color
    font-weight: 300; // Font weight

    &:last-child {
        border-bottom: none; // Remove bottom border for the last item
    }

    &:hover {
        font-weight: 500; // Increase font weight on hover
    }
`;

export default function CategoryNav() {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const subMenuRef = useRef(null);

    const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

    // Function to toggle submenu visibility
    const toggleSubMenu = () => {
        setShowSubMenu((prev) => !prev);
    };

    // Effect to handle click outside the submenu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
                setShowSubMenu(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    

    return (
        <CategoryButton onClick={toggleSubMenu} ref={subMenuRef}>
            <span>All Categories <IoIosArrowDown /></span>
            {/* Render submenu if showSubMenu is true */}
            {showSubMenu && (
                <SubMenu>
                    {/* Map through categories and render submenu items */}
                    {categories.map((category, index) => (
                        <SubMenuItem key={index}>{category}</SubMenuItem>
                    ))}
                </SubMenu>
            )}
        </CategoryButton>
    );
}
