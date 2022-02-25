import styled from "styled-components";
import { devices } from "./devices";

export const CartContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  top: 80px;
  padding: 0 10px;

  @media ${devices.lg} {
    display: flex;
    justify-content: flex-end;
    font-size: 1.3rem;
  }
`;
export const Box = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding-bottom: 30px;

  @media ${devices.md} {
    margin: auto;
    width: 500px;
  }
  @media ${devices.lg} {
    justify-content: flex-end;
    margin: 20px 50px 0 0;
    width: 400px;
  }
`;

export const Title = styled.p`
  text-align: left;
  padding: 20px;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 0 20px 0;

  p {
    margin: 0;
    text-align: left;
    color: gray;
  }
  p:nth-child(2) {
    display: inline;
    justify-self: flex-start;
  }
  @media ${devices.lg} {
    margin: 20px 0 20px 0;
    p {
      margin: 2px 0;
    }
  }
`;

export const Total = styled.span`
  color: black;
`;

export const Image = styled.div`
  display: hidden;
  width: 60px;
  height: 60px;
  margin: 0 16px 0 0;

  img {
    border-radius: 6px;
  }
`;
