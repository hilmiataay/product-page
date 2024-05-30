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

export default function DescriptionTab2() {

  return (
    <DescParag>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, metus eu rhoncus efficitur, turpis sem tempusmassa, id consectetur nunc purus in lectus. Donec non velit a odio volutpat volutpat in in nisi. Maecenas aliquet turpislacus, id pharetra elit sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque. Integer efficitur interdum nunc, utelementum nulla. Phasellus feugiat nulla et rhoncus porttitor. Nullam at lectus sed turpis porttitor viverra accumsanhendrerit lorem. Praesent tincidunt nisi at nunc suscipit malesuada.</p>
    </DescParag>
  )
}
