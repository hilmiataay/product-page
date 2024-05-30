import { IoIosArrowDown } from "react-icons/io";
import React from 'react';
import styled from 'styled-components';

// Using styled component for the divider effect
const Divider = styled.div`
  display: flex;
  align-items: center; // Vertical alignment
`;

const Language = styled.span`
  padding: 0 10px; // Spacing on sides
  border-right: 1px solid white; // Vertical line to the right
  cursor: pointer;
`;

const Currency = styled.span`
  padding: 0 10px; // Spacing on sides
  cursor: pointer;
`;

export default function LanguageCurrencySwitcher() {
    return (
        <Divider>
            {/* Language option with dropdown icon */}
            <Language>
                ENG <IoIosArrowDown />
            </Language>
            {/* Currency option with dropdown icon */}
            <Currency>
                USD <IoIosArrowDown />
            </Currency>
        </Divider>
    );
}
