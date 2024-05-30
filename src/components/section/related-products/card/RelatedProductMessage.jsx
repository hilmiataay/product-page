import React from 'react';
import styled, { css } from 'styled-components';

// Styled component for displaying related messages with different colors
const RelatedMessage = styled.div`
  padding: 4px 19px;
  margin: 10px 0;
  border-radius: 100px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  width: fit-content;

  /* Conditional rendering based on message type */
  ${({ type }) => type === 'msg-green' && css`
    background-color: rgba(18, 160, 92, 1);
  `}
  ${({ type }) => type === 'msg-red' && css`
    background-color: rgba(231, 60, 23, 1);
  `}
  ${({ type }) => type === 'msg-orange' && css`
    background-color: rgba(255, 153, 0, 1);
  `}
  ${({ type }) => type === 'msg-purple' && css`
    background-color: rgba(127, 124, 246, 1);
  `}

  /* Responsive adjustments */
  @media (max-width: 992px) {
    padding: 3px 15px;
    font-size: 11px;
  }

  @media (max-width: 767px) {
    padding: 3px 14px;
    font-size: 9px;
  }

  @media (max-width: 428px) {
    padding: 3px 13px;
    font-size: 7px;
  }
`;

export default function RelatedProductMessage({ message }) {
  // Function to determine the message type based on its content
  const getMessageClassName = (message) => {
    if (message.includes("NEW")) {
      return "msg-green";
    } else if (message.includes("%")) {
      return "msg-red";
    } else if (message.includes("HOT")) {
      return "msg-orange";
    } else {
      return "msg-purple";
    }
  };

  return (
    <RelatedMessage type={getMessageClassName(message)}>
      <span>{message}</span>
    </RelatedMessage>
  );
}
