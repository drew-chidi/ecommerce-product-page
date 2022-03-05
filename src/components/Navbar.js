import React, { Fragment, useState } from "react";
import {
  Avatar,
  NavContainer,
  StyledMenu,
  StyledClose,
  StyledHeader,
  StyledCart,
  NavLinks,
  StyledList,
  ListItem,
  HeaderContainer,
} from "./styles/Header.styled";
import { ReactComponent as CartIcon } from "../assets/images/icon-cart.svg";
import { ReactComponent as Menu } from "../assets/images/icon-menu.svg";
import { ReactComponent as MenuClose } from "../assets/images/icon-close.svg";

import avatar from "../assets/images/image-avatar.png";
import logo from "../assets/images/logo.svg";
import Cart from "./Cart";
import Badge from "./Badge";

const Navbar = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  // Function to Toggle Menu
  const toggleMenuHandler = () => {
    setNavMenu((menu) => !menu);
  };

  // Function to show or hide cart inf0
  const cartHandler = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <Fragment>
      <div></div>
      {showCart && (
        <Cart info={props.productInfo} setDelete={props.setDelete} />
      )}
      <HeaderContainer>
        <div>
          <StyledHeader>
            <NavContainer className='navlinks'>
              {/* Conditionally shows the Hamburger Menu Icon */}
              {!navMenu && (
                <StyledMenu>
                  <Menu onClick={toggleMenuHandler} />
                </StyledMenu>
              )}

              <div>
                <img src={logo} alt='company logo' />
              </div>

              {/* Conditionally shows the Side Tab and the Close-Menu-Icon */}
              <NavLinks display={navMenu}>
                <StyledClose>
                  <MenuClose fill='gray' onClick={toggleMenuHandler} />
                </StyledClose>
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
              <StyledCart onClick={cartHandler}>
                <CartIcon />

                {/* Only display Badge when count is above 0 */}
                {props.productInfo.count !== 0 && (
                  <Badge count={props.productInfo.count} />
                )}
              </StyledCart>
              <Avatar>
                <img src={avatar} alt='avatar' />
              </Avatar>
            </NavContainer>
          </StyledHeader>
        </div>
      </HeaderContainer>
    </Fragment>
  );
};

export default Navbar;
