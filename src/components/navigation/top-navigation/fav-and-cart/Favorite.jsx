import React, { useState, useEffect, useRef } from 'react';
import { GrFavorite } from "react-icons/gr";
import styled from 'styled-components';

// Styled component for the favorite icon
const StyledFavoriteIcon = styled(GrFavorite)`
  font-size: 24px; // Icon size
  cursor: pointer;

  @media (max-width: 615px) {
    font-size: 21px; // Icon size for smaller screens
  }

  @media (max-width: 428px) {
    font-size: 20px; // Icon size for smallest screens
  }
`;

// Styled component for the favorite count badge
const FavoriteCount = styled.span`
  font-size: 14px; // Font size
  position: absolute; // Positioning
  top: -8px; // Top position
  right: -8px; // Right position
  background-color: #E73C17; // Background color
  color: white; // Text color
  border-radius: 50%; // Border radius for circular shape
  padding: 6px; // Padding
  display: flex; // Flex display
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  text-align: center; // Text alignment
  height: 22px; // Height
  width: 22px; // Width
  cursor: pointer; // Cursor type

  @media (max-width: 615px) {
    font-size: 12px; // Font size for smaller screens
    top: -4px; // Top position for smaller screens
    height: 18px; // Height for smaller screens
    width: 18px; // Width for smaller screens
    padding: 5px; // Padding for smaller screens
  }

  @media (max-width: 428px) {
    font-size: 10px; // Font size for smallest screens
    top: -1px; // Top position for smallest screens
    right: -6px; // Right position for smallest screens
    padding: 4px; // Padding for smallest screens
    height: 16px; // Height for smallest screens
    width: 16px; // Width for smallest screens
  }
`;

// Styled component for the favorite list container
const FavoriteListContainer = styled.div`
  position: absolute; // Positioning
  top: 52px; // Top position
  right: 0; // Right position
  width: 300px; // Width
  max-height: 400px; // Maximum height
  overflow-y: auto; // Enable vertical scrolling
  background-color: white; // Background color
  box-shadow: 0 2px 8px 0 #63636333; // Box shadow
  border-bottom-left-radius: 5px; // Border radius
  border-bottom-right-radius: 5px; // Border radius
  z-index: 1000; // Z-index
`;

// Styled component for each favorite item
const FavoriteItem = styled.a`
  display: flex; // Flex display
  align-items: center; // Align items vertically
  padding: 10px; // Padding
  border-bottom: 1px solid #ddd; // Bottom border
  text-decoration: none; // Remove default link underline
  color: inherit; // Inherit text color

  &:hover {
    background-color: #f9f9f9; // Background color on hover
  }
`;

// Styled component for the favorite item image
const FavoriteItemImage = styled.img`
  width: 60px; // Width
  height: auto; // Auto height
  margin-right: 10px; // Right margin
`;

// Styled component for the favorite item details
const FavoriteItemDetails = styled.div`
  display: flex; // Flex display
  flex-direction: column; // Flex direction
`;

// Styled component for the favorite item title
const FavoriteItemTitle = styled.div`
  font-size: 14px; // Font size
  font-weight: bold; // Bold font weight
`;

// Styled component for the favorite item price
const FavoriteItemPrice = styled.div`
  font-size: 12px; // Font size
  color: #888; // Text color
`;

export default function Favorite({ favoriteCount, products }) {
  const [showFavorites, setShowFavorites] = useState(false); // State to toggle favorite list visibility
  const containerRef = useRef(null); // Ref for the favorite list container

  // Function to toggle favorite list visibility
  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  // Function to handle click outside of the favorite list container
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowFavorites(false);
    }
  };

  useEffect(() => {
    // Add event listener for click outside when favorite list is shown
    if (showFavorites) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFavorites]);

  // Filter favorite products
  const favoriteProducts = products.filter(product => product.isFavorite);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <div onClick={handleToggleFavorites}>
        <StyledFavoriteIcon /> {/* Favorite icon */}
        <FavoriteCount>{favoriteCount}</FavoriteCount> {/* Favorite count badge */}
      </div>
      {showFavorites && (
        <FavoriteListContainer>
          {favoriteProducts.map((product) => (
            <FavoriteItem key={product.id} href="#">
              <FavoriteItemImage src={product.img1} alt={product.title} />
              <FavoriteItemDetails>
                <FavoriteItemTitle>{product.title}</FavoriteItemTitle>
                <FavoriteItemPrice>${product.price}</FavoriteItemPrice>
              </FavoriteItemDetails>
            </FavoriteItem>
          ))}
        </FavoriteListContainer>
      )}
    </div>
  );
}
