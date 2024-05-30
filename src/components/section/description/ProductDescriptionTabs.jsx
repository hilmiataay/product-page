import React, { useState } from 'react';
import styled from 'styled-components';
import DescriptionTab1 from './DescriptionTab1';
import DescriptionTab2 from './DescriptionTab2';
import DescriptionTab3 from './DescriptionTab3';

// Styled components for the main tab container and tab headers
const TabMainDiv = styled.div`
  height: 212px; // Default height
  margin: 90px auto; // Centering and margin
  width: 70%; // Default width

  @media (max-width: 992px) {
    margin: 50px auto; // Adjusted margin for smaller screens
    width: 83%; // Adjusted width for smaller screens
  }

  @media (max-width: 428px) {
    margin: auto; // Centering for mobile screens
    width: 85%; // Adjusted width for mobile screens
  }
`;

const TabHeaders = styled.div`
  display: flex; // Horizontal alignment of tab headers
  justify-content: space-between; // Equal spacing between tab headers
  margin-bottom: 20px; // Bottom margin for spacing
  position: relative; /* Marking as a containing block for the underline */
  &:after {
    content: '';
    position: absolute; // Positioned absolutely to ensure it's below the headers
    bottom: 8px; // Distance from the headers
    left: 0; // Start from the left
    width: 100%; // Span the entire width
    height: 1px; // Underline height
    background-color: hsla(0, 0%, 94%, 1); // Underline color
  }

  @media (max-width: 428px) {
    margin-bottom: 5px; // Adjusted bottom margin for mobile screens
  }
`;

// Styled component for individual tab headers
const TabHeader = styled.h3`
  margin-right: 20px; // Right margin for spacing between headers
  padding-bottom: 20px; // Bottom padding for spacing
  position: relative; // Positioning context for the underline
  font-size: 22px; // Default font size
  font-weight: 500; // Default font weight
  cursor: pointer; // Pointer cursor for interactive feel
  &:after {
    content: '';
    position: absolute; // Positioned absolutely for the underline
    bottom: 0; // Start from the bottom of the header
    left: 0; // Start from the left
    width: ${props => props.active === 'true' ? '100%' : '0'}; // Width based on active state
    height: 1px; // Underline height
    background-color: red; // Underline color
    z-index: 1; // Ensure it's above the headers
  }

  // Media queries for responsive font sizes
  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }

  @media (max-width: 428px) {
    font-size: 12px;
  }
`;

export default function ProductDescriptionTabs() {
  const [activeTab, setActiveTab] = useState('description'); // State for active tab

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabMainDiv>
      {/* Tab headers */}
      <TabHeaders>
        <TabHeader active={activeTab === 'description' ? 'true' : 'false'} onClick={() => handleTabClick('description')}>Description</TabHeader>
        <TabHeader active={activeTab === 'specification' ? 'true' : 'false'} onClick={() => handleTabClick('specification')}>Specification</TabHeader>
        <TabHeader active={activeTab === 'reviews' ? 'true' : 'false'} onClick={() => handleTabClick('reviews')}>Reviews</TabHeader>
      </TabHeaders>
      {/* Rendering tab content based on active tab */}
      {activeTab === 'description' && <DescriptionTab1 />}
      {activeTab === 'specification' && <DescriptionTab2 />}
      {activeTab === 'reviews' && <DescriptionTab3 />}
    </TabMainDiv>
  );
}
