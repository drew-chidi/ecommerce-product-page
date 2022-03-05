import styled from "styled-components";
import { devices } from "./devices";

export const InfoContainer = styled.section`
  padding: 0 20px;
  text-align: left;

  h1 {
    font-size: 1.625rem;
    font-weight: 700;
  }

  @media ${devices.lg} {
    padding: 0 75px 0 0;
    margin: 0 48px;

    h1 {
      font-size: 2.25rem;
      margin: 10px 0 20px 0;
    }

    p {
      font-size: 1rem;
    }
  }

  @media ${devices.xl} {
    margin: 0 120px;
    padding: 0;

    h1 {
      font-size: 2.5rem;
    }
  }

  @media ${devices.xxl} {
    margin: 0 128px;

    max-width: 100%;
    padding: 0 120px 0 0;
  }
`;

export const Title = styled.p`
  color: hsl(26, 100%, 55%);
  font-weight: 700;
  margin: 20px 0 0 0;
  font-size: 12px;
`;

export const StyledP = styled.p`
  color: gray;
  margin: 0 0 16px 0;
  font-size: 13.5px;
  @media ${devices.xl} {
    width: 50%;
  }
  @media ${devices.xl} {
    width: 100%;
  }
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  margin-right: 16px;
  text-decoration: none;
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 20px;

  div {
    display: inline-flex;
    align-items: center;
  }

  div:nth-child(2) {
    background: hsl(25, 100%, 94%);
    color: hsl(26, 100%, 55%);
  }

  P {
    display: inline;
    text-decoration: line-through;
    opacity: 0.3;
    font-size: 0.75rem;
  }

  @media ${devices.lg} {
    flex-direction: column;
    align-items: flex-start;
    p {
      margin-top: 1px;
    }
  }
`;

export const CountContainer = styled.div`
  display: flex;
  width: 100%;
  background: hsl(220, 14%, 75%);
  border-radius: 10px;
  margin-bottom: 16px;
  height: 50px;
  font-weight: 700;

  button {
    background: transparent;
    outline: none;
    border: 0;
    margin: 0 16px;
  }
  img {
    width: 22px;
  }
  p {
    margin: auto;
    display: inline;
    width: 100%;
    text-align: center;
  }

  @media ${devices.lg} {
    margin-bottom: 0px;
    button {
      margin: 0px;
      padding: 0 10px;
    }
  }
`;

export const Flex = styled.div`
  @media ${devices.lg} {
    display: flex;
    items-align: center;
    gap: 16px;
  }

  & > Button {
    min-width: 60%;
  }

  @media ${devices.xl} {
    width: 100%;
  }

  @media ${devices.xxl} {
    width: auto;
  }
`;
