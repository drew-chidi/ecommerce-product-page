import styled from "styled-components";
import { devices } from "./devices";

export const Backdrop = styled.div`
  @media ${devices.lg} {
    display: ${(prop) => (prop.display === true ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  }
`;

export const CarouselContainer = styled.section`
  position: relative;

  @media ${devices.lg} {
    display: ${(prop) => (prop.display === true ? "block" : "none")};
    position: absolute;
    left: 50%;
    margin-left: -220px;
    margin-top: -260px;
    top: 50%;
    z-index: 4;

    img {
      border-radius: 1.5rem;
    }
  }
`;

export const StyledDiv = styled.div`
  @media ${devices.lg} {
    width: 350px;
    margin: auto;
  }

  @media ${devices.xl} {
    width: 400px;
  }
`;

export const CarouselGrid = styled.div`
  display: none;

  & > div {
    width: 90px;
    padding: 0 8px;
    margin: auto;
  }

  button: {
    border-radius: 10px;
    background: blue;
  }

  button:focus {
    border: none;
    outline: solid 3px hsl(26, 100%, 55%);
    border-radius: 10px;
  }

  button:focus img {
    filter: contrast(40%) brightness(120%);
  }

  img {
    border-radius: 10px;
    &:hover {
      filter: contrast(40%) brightness(150%);
    }
  }

  @media ${devices.lg} {
    display: inline-flex;
    margin: 20px 0 0 0;
    position: relative;

    button: {
      border-radius: 10px;
    }
  }

  @media ${devices.xl} {
    & > div {
      margin: auto;
    }
  }
`;

export const StyledClose = styled.div`
  display: none;

  @media ${devices.lg} {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 32px;
  }

  @media ${devices.xl} {
    padding: 0;
  }
`;

export const NextLogo = styled.div`
  border-radius: 100%;
  background: white;
  height: 2rem;
  position: absolute;
  right: 16px;
  top: 50%;
  width: 2rem;

  img {
    position: absolute;
    right: 25%;
    top: 25%;
    margin-right: 2px;
  }

  @media ${devices.lg} {
    margin: -30px 0px 0 0;
    top: 50%;
    right: -7%;
    height: 60px;
    width: 60px;
  }
  @media ${devices.xl} {
    img {
      width: 20px;
    }
  }
`;

export const PrevLogo = styled.div`
  border-radius: 100%;
  background: white;
  height: 2rem;
  position: absolute;
  left: 16px;
  top: 50%;
  width: 2rem;

  img {
    position: absolute;
    left: 25%;
    top: 25%;
  }

  @media ${devices.lg} {
    left: -7%;
    margin: -30px 0px 0 0px;
    top: 50%;
    height: 60px;
    width: 60px;
  }

  @media ${devices.xl} {
    img {
      width: 20px;
    }
`;

export const ImageContainer = styled.div`
  display: none;
  @media ${devices.lg} {
    display: block;
    margin: 0 0 0 0;
    padding: 0 0 0 100px;
    z-index: 0;
  }

  @media ${devices.xl} {
    padding: 0 0 0 180px;
  }

  & > div {
    width: 300px;
  }
  img {
    border-radius: 1rem;
  }

  button {
    outline: none;
    border: 0;
    background: none;
  }

  @media ${devices.lg} {
    & > div {
      width: 300px;
    }
  }

  @media ${devices.xl} {
    margin: 0;
    & > div {
      width: 350px;
    }
  }
`;

export const ImageBox = styled.div`
  width: 0px;
`;

export const Image = styled.img`
  height: 500px;

  @media ${devices.lg} {
    height: auto;
  }
`;
export const ImageGrid = styled.div`
  display: none;

  @media ${devices.lg} {
    display: flex;
    gap: 20px;
    margin: 15px 0 0 0;
  }

  button: {
    outline: solid 3px transparent;
  }

  button:focus {
    border: none;
    outline: solid 3px hsl(26, 100%, 55%);
    border-radius: 10px;
  }

  button:focus img {
    filter: contrast(40%) brightness(120%);
  }

  img {
    border-radius: 10px;
    &:hover {
      filter: contrast(40%) brightness(150%);
    }
  }
`;
