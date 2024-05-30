import React from 'react';
import styled from 'styled-components';
import { GoDotFill } from "react-icons/go";

// Styled component for pagination
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 428px) {
    margin: 10px auto 40px auto;
  }
`;

const PaginationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 1px;
  font-size: 28px;
  outline: none;

  &:focus {
    outline: none;
  }

  /* Dynamic color based on active state */
  svg {
    fill: ${({ active }) => active ? 'rgba(231, 60, 23, 1)' : 'rgba(244, 245, 248, 1)'};
  }

  @media (max-width: 428px) {
    font-size: 16px;
  }
`;

export default function Pagination({ currentPage, setCurrentPage, totalPages }) {
  return (
    <PaginationContainer>
      {/* Generate pagination buttons */}
      {Array.from({ length: totalPages }, (_, i) => (
        <PaginationButton
          key={i}
          active={i + 1 === currentPage ? 1 : 0}
          onClick={() => setCurrentPage(i + 1)}
        >
          <GoDotFill />
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
}
