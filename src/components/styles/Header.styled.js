import styled from "styled-components";
import { devices } from "./devices";

export const HeaderContainer = styled.div`
  padding: 20px;

  @media ${devices.lg} {
    padding: 40px 90px;
  }
  @media ${devices.xl} {
    padding: 25px 125px 25px 90px;
  }
  @media ${devices.xxl} {
    padding: 40px 150px;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  @media ${devices.lg} {
    padding: 0 0 40px 0;
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.nav`
  display: ${(prop) => (prop.display === true ? "block" : "none")};
  position: fixed;
  top: 0%;
  left: 0%;
  background: white;
  height: 100vh;
  width: 66%;
  z-index: 10;

  @media ${devices.mobileL} {
    width: 50%;
  }

  @media ${devices.md} {
    width: 40%;
  }

  @media ${devices.lg} {
    display: flex;
    background: transparent;
    height: auto;
    position: static;
    display: flex;
    align-items: center;
    text-decoration: none;
    weight: auto;
  }
`;

export const StyledList = styled.ul`
  cursor: pointer;
  margin: 48px 0;

  @media ${devices.lg} {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  margin: 0 30px;
  padding: 20px 0;

  @media ${devices.lg} {
    color: gray;
    font-weight: 500;
    padding: auto;
    &:hover {
      color: black;
    }
  }
`;

export const StyledMenu = styled.div`
  padding: 0 20px 0 0;
  font-weight: 700;
  color: gray;
  display: flex;
  font-size: 2rem;

  @media ${devices.lg} {
    display: none;
  }
`;

export const StyledClose = styled.div`
  font-weight: 700;
  fill: gray;
  display: flex;
  font-size: 2rem;
  margin: 0 30px;
  padding: 24px 0 0 0;

  @media ${devices.lg} {
    display: none;
  }
`;

export const StyledCart = styled.button`
  padding: 0 20px 0 0;
  font-weight: 700;
  display: flex;
  font-size: 2rem;
  border: 0;
  background: transparent;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid transparent;
  border-radius: 100%;

  &:hover {
    border: 2px solid hsl(26, 100%, 55%);
  }

  @media ${devices.lg} {
    width: 48px;
    height: 48px;
  }
`;
