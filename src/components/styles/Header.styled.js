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
  display: none;
  @media ${devices.lg} {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;
export const StyledList = styled.ul`
  display: flex;
  align-items: center;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 30px;
  color: gray;
  &:hover {
    color: black;
  }
`;

export const StyledNav = styled.div`
  padding: 0 20px 0 0;
  font-weight: 700;
  color: gray;
  display: flex;
  font-size: 2rem;

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
  border: 1px solid gray;
  border-radius: 100%;

  @media ${devices.lg} {
    width: 48px;
    height: 48px;
  }
`;
