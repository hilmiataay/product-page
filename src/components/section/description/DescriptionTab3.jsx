import React from 'react';
import styled from 'styled-components';

// Styled component for the description paragraph
const DescParag = styled.div`
        line-height: 30px;
        font-weight: 300;
        font-size: 18px;

        @media (max-width: 1024px) {
          font-size: 16px;
          line-height: 27px;
        }
      
        @media (max-width: 992px) {
          font-size: 14px;
          line-height: 22px;
        }
      
        @media (max-width: 767px) {
          font-size: 12px;
          line-height: 18px;
        }

        @media (max-width: 428px) {
          font-size: 10px;
          line-height: 15px;
        }
    `;

export default function DescriptionTab3() { 

  return (
    <DescParag>
        <p>Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean magna massa, tempus quis risus nec, sollicitudin consectetur mi. Donec dictum nulla sed nulla semperelementum. Nulla dictum ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque. Aenean alacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat tellus elementum.</p>
    </DescParag>
  )
}
