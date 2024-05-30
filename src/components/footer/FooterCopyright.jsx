import React from 'react';
import styled from 'styled-components';

// Styled container for copyright text
const CopyrightContainer = styled.div`
  text-align: center;
  font-size: 14px;
  color: #fff;
  padding: 70px;
  font-weight: 300;

  @media (max-width: 992px) {
    padding: 0px 0px 50px 0px;
  }

  @media (max-width: 428px) {
    font-size: 11px;
  }
`;

// Component for displaying copyright information
export default function FooterCopyright() {
    return (
        <CopyrightContainer>
            &copy; 2023 All Rights Reserved
        </CopyrightContainer>
    );
}
