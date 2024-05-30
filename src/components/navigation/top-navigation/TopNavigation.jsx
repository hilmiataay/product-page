import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SearchBar from './SearchBar';
import CategoryNav from './CategoryNav';
import LoginButtons from './LoginButtons';
import Favorite from './fav-and-cart/Favorite';
import Cart from './fav-and-cart/Cart';
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

// Container for the top navigation
const TopNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 10px 50px 10px;
  font-size: 20px;
  font-weight: 300;

  @media (max-width: 767px) {
    justify-content: flex-end;
  }

  @media (max-width: 428px) {
    padding: 0px 18px;
  }
`;

// Container for the logo
const LogoContainer = styled.div`
  width: 23%;
  text-align: center;

  @media (max-width: 950px) {
    width: 88%;
    margin-left: 40px;
    text-align: left;
  }
   
  @media (max-width: 767px) {
    width: 46%;
  }

  @media (max-width: 670px) {
    width: 35%;
  }

  @media (max-width: 510px) {
    width: 31%;
  }
`;

// Container for the middle section
const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 68%;
  height: 76px;

  @media (max-width: 950px) {
    width: 8%;
    justify-content: flex-end;
  }

  @media (max-width: 670px) {
    width: 18%;
    gap: 2px;
    margin-right: 4px;
  }
`;

// Container for the search bar
const SearchContainer = styled.div`
  border: 2px solid #F0F0F0;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 30px;

  @media (max-width: 950px) {
    display: none;
  }
`;

// Container for the category navigation and login buttons
const CategoryLoginContainer = styled.div`
  border: 2px solid #F0F0F0;
  border-left: none;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0px 30px;
  position: relative;

  @media (max-width: 1108px) {
    display: none;
  }
`;

// Container for the right section
const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 9%;

  @media (max-width: 510px) {
    width: 12%;
  }

  @media (max-width: 670px) {
    gap: 8px;
  }
`;

// Wrapper for the profile icon
const ProfileIconWrapper = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 50px;

  @media (max-width: 1108px) {
    display: block;
  }

  @media (max-width: 950px) {
    margin: 0 5px;
  }

  @media (max-width: 615px) {
    font-size: 21px;
  }

  @media (max-width: 428px) {
    font-size: 20px;
    margin-right: 8px;
  }
`;

// Wrapper for the search icon
const SearchIconWrapper = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 950px) {
    display: block;
  }

  @media (max-width: 615px) {
    font-size: 21px;
  }

  @media (max-width: 428px) {
    font-size: 20px;
  }
`;

export default function TopNavigation({ favoriteCount, cartCount, products }) {
  return (
    <TopNavContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MiddleContainer>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
        <CategoryLoginContainer>
          <CategoryNav />
          <div style={{ marginLeft: 'auto' }}>
            <LoginButtons />
          </div>
        </CategoryLoginContainer>
        <SearchIconWrapper>
          <IoIosSearch />
        </SearchIconWrapper>
        <ProfileIconWrapper>
          <CgProfile />
        </ProfileIconWrapper>
      </MiddleContainer>
      <RightContainer>
        <Favorite favoriteCount={favoriteCount} products={products} />
        <Cart cartCount={cartCount} products={products} />
      </RightContainer>
    </TopNavContainer>
  );
}
