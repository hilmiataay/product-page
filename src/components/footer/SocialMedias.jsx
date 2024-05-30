import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

// Container for social media icons
const SocialMediaContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

// Styled social media icon
const SocialMediaIcon = styled.span`
  font-size: 26px !important;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #343a40;
  }
`;

// Component to display social media icons
export default function SocialMedias() {
    return (
        <SocialMediaContainer>
            <SocialMediaIcon><FaFacebookF /></SocialMediaIcon>
            <SocialMediaIcon><FaWhatsapp /></SocialMediaIcon>
            <SocialMediaIcon><FaInstagram /></SocialMediaIcon>
            <SocialMediaIcon><FaYoutube /></SocialMediaIcon>
        </SocialMediaContainer>
    );
}
