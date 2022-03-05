import styled from "styled-components";
import { devices } from "./devices";

export const BadgeContainer = styled.div`
  width: 20px;
  position: absolute;
  right: 60px;
  top: 10px;

  & > p {
    background: hsl(26, 100%, 55%);
    border-radius: 40%;
    color: white;
    font-size: 0.875rem;
    margin: 0;
  }

  @media ${devices.lg} {
    top: 6%;
    right: 14%;
  }

  @media ${devices.xl} {
    top: 5%;
  }

  @media ${devices.xxl} {
    top: 8%;
  }
`;
