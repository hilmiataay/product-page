// Import React, useState, useRef, useEffect
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import productData from '../../../../productData.json';

// Define styled thumbnail component
const Thumbnail = styled.img`
  width: 128px;
  height: auto;
  margin: 5px;
  cursor: pointer;

  @media (max-width: 428px) {
    width: 90px;
  }
`;

// Define styled outer div for each thumbnail
const StyledProductThumbnails = styled.div`
  width: 152px;
  height: 115px;
  border: ${({ $active }) => ($active ? '1px solid rgba(231, 60, 23, 1)' : '1px solid hsla(0, 0%, 95%, 1)')};
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 1150px) {
    width: 132px;
  }

  @media (max-width: 428px) {
    width: 112px;
    height: 89px;
    width: fit-content;
  }
`;

// Define styled container div for the thumbnails
const ThumbnailsContainer = styled.div`
  height: 577px; /* Set the height of the container */
  display: grid; /* Use grid for layout */
  justify-content: space-between; /* Space between thumbnails */
  margin: 60px 10px auto 50px; /* Margin for positioning */

  @media (max-width: 1024px) {
    margin: 60px 10px auto 10px; /* Adjust margin for smaller screens */
  }

  @media (max-width: 767px) {
    display: flex; /* Change to flex layout for smaller screens */
    gap: 15px; /* Add gap between thumbnails */
    margin: 45px auto;  /* Center margin */
    padding: 0px 30px; /* Add padding */
    height: fit-content; /* Adjust height to fit content */
    position: relative; /* Relative positioning */
    overflow: hidden; /* Hide overflow */
    width: 86vw; /* Set width to viewport width */
  }

  @media (max-width: 428px) {
    margin: 15px auto auto auto; /* Adjust margin for smaller screens */
  }
`;

const ThumbnailsRefContainer = styled.div`
  width: 100%; /* Set width to 100% */

  @media (max-width: 767px) {
    overflow: hidden; /* Hide overflow for smaller screens */
  }
`;

const ThumbnailsWrapper = styled.div`
  display: grid; /* Use grid layout */
  height: 577px; /* Set height of wrapper */

  @media (max-width: 767px) {
    gap: 15px; /* Add gap between thumbnails */
    display: flex; /* Change to flex layout for smaller screens */
    transition: transform 0.3s ease; /* Add transition for smoother transformation */
    height: fit-content; /* Adjust height to fit content */
  }
`;

const ArrowButton = styled.button`
  background-color: #E73C17; /* Set background color */
  border: none; /* Remove border */
  color: white; /* Set text color */
  padding: 10px; /* Add padding */
  cursor: pointer; /* Set cursor to pointer */
  position: absolute; /* Set positioning to absolute */
  top: 50%; /* Align to the center vertically */
  transform: translateY(-50%); /* Adjust positioning */
  z-index: 1; /* Set z-index */
  display: none; /* Initially hide the button */
  height: 30px; /* Set height */
  align-items: center; /* Align items to the center */

  &:disabled {
    background-color: rgba(217, 217, 217, 1); /* Change background color when disabled */
    cursor: not-allowed; /* Set cursor to not allowed */
  }

  ${({ $left }) => $left && `
    left: 0; /* Position to the left */
  `}

  ${({ $right }) => $right && `
    right: 0; /* Position to the right */
  `}

  @media (max-width: 767px) {
    display: flex; /* Display the button for smaller screens */
  }
`;

export default function ProductThumbnails({ activeThumbnail, onThumbnailClick }) {
  const images = [productData[0].img1, productData[0].img2, productData[0].img3, productData[0].img4];
  const [scrollPosition, setScrollPosition] = useState(0);
  const thumbnailsRef = useRef();

  const scrollAmount = 140;

  const handleLeftClick = () => {
    setScrollPosition((prev) => Math.max(prev - scrollAmount, 0)); /* Handle left button click */
  };

  const handleRightClick = () => {
    const maxScroll = thumbnailsRef.current.scrollWidth - thumbnailsRef.current.clientWidth;
    setScrollPosition((prev) => Math.min(prev + scrollAmount, maxScroll)); /* Handle right button click */
  };

  useEffect(() => {
    const handleResize = () => {
      setScrollPosition(0); /* Reset scroll position on resize */
    };

    window.addEventListener('resize', handleResize); /* Add event listener for resize */
    return () => {
      window.removeEventListener('resize', handleResize); /* Clean up event listener */
    };
  }, []);

  return (
    <ThumbnailsContainer>
      <ArrowButton $left onClick={handleLeftClick} disabled={scrollPosition === 0}>{"<"}</ArrowButton> {/* Left arrow button */}
      <ThumbnailsRefContainer ref={thumbnailsRef}>
        <ThumbnailsWrapper style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {images.map((image, index) => (
            <StyledProductThumbnails key={index} $active={activeThumbnail === image}>
              <Thumbnail
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => onThumbnailClick(image)}
              />
            </StyledProductThumbnails>
          ))}
        </ThumbnailsWrapper>
      </ThumbnailsRefContainer>
      <ArrowButton $right onClick={handleRightClick} disabled={scrollPosition === thumbnailsRef.current?.scrollWidth - thumbnailsRef.current?.clientWidth}>{">"}</ArrowButton> {/* Right arrow button */}
    </ThumbnailsContainer>
  );
}
