import React, { useState } from "react";
import {
  Avatar,
  NavContainer,
  StyledNav,
  StyledHeader,
  StyledCart,
  NavLinks,
  StyledList,
  ListItem,
  HeaderContainer,
} from "./styles/Header.styled";
import { ReactComponent as CartIcon } from "../assets/images/icon-cart.svg";
import { ReactComponent as Menu } from "../assets/images/icon-menu.svg";

import avatar from "../assets/images/image-avatar.png";
import logo from "../assets/images/logo.svg";
import Cart from "./Cart";
import Badge from "./Badge";

const Navbar = (props) => {
  const [showCart, setShowCart] = useState(false);

  // Function to show or hide cart inf0
  const cartHandler = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <>
      {showCart && (
        <Cart info={props.productInfo} setDelete={props.setDelete} />
      )}
      <Badge count={props.productInfo.count} />
      <HeaderContainer>
        <div>
          <StyledHeader>
            <NavContainer className='navlinks'>
              <StyledNav>
                <Menu />
              </StyledNav>
              <div>
                <img src={logo} alt='company logo' />
              </div>
              <NavLinks>
                <StyledList>
                  <ListItem>Collections</ListItem>
                  <ListItem>Men</ListItem>
                  <ListItem>Women</ListItem>
                  <ListItem>About</ListItem>
                  <ListItem>Contacts</ListItem>
                </StyledList>
              </NavLinks>
            </NavContainer>
            <NavContainer>
              <StyledCart>
                <CartIcon onClick={cartHandler} />
              </StyledCart>
              <Avatar>
                <img src={avatar} alt='avatar' />
              </Avatar>
            </NavContainer>
          </StyledHeader>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Navbar;
