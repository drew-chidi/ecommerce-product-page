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
    margin-left: -300px;
    margin-top: -300px;
    top: 42%;
    z-index: 4;

    img {
      border-radius: 1.5rem;
    }
  }

  @media ${devices.xl} {
    left: 50%;
    margin-left: 0;
    margin-left: -220px;
    margin-top: -220px;
  }
`;

export const StyledDiv = styled.div`
  @media ${devices.lg} {
    width: 500px;
    margin: auto;
  }
  @media ${devices.xl} {
    /* width: 610px; */
    /* margin: auto; */
    width: 450px;
  }
`;

export const LightGrid = styled.div`
  display: none;

  @media ${devices.lg} {
    display: inline-flex;
    margin: 20px 0 0 0;
    padding: 0 20px;
    position: relative;
  }

  & > div {
    width: 115px;
    padding: 0 16px 0 0;
    margin: auto;
  }
  img {
    border-radius: 1rem;
  }
  button {
    outline: none;
    border: 0;
    background: none;
  }

  @media ${devices.xl} {
    & > div {
      width: 110px;
      padding: 0 10px;
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
    margin: -20px -20px 0 0;
    top: 50%;
    right: 0%;
    height: 60px;
    width: 60px;
  }
  @media ${devices.xl} {
    top: 50%;
    /* right: -7%; */
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
    /* max-width: 100%; */
  }
  @media ${devices.lg} {
    margin: -20px 0px 0 -20px;
    top: 50%;
    left: 0%;
    height: 60px;
    width: 60px;
  }
  @media ${devices.xl} {
    top: 50%;
    left: 0%;
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
      width: 400px;
    }
  }
  @media ${devices.xl} {
    margin: 40px 0 0 0;
    & > div {
      /* width: 450px; */
      width: 400px;
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
    gap: 10px;
    margin: 10px 0 0 0;
  }

  img {
    border-radius: 1rem;
  }
`;

// export const LightBox = styled.div`
//   display: none;
//   @media ${devices.lg} {
//     display: block;
//     margin: 40px 0 0 0;
//     padding: 0 0 0 150px;
//     position: absolute;
//     z-index: 1;
//   }

//   & > div {
//     width: 500px;
//   }
//   img {
//     border-radius: 1rem;
//   }
// `;
