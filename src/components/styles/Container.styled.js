import styled from "styled-components";
import { devices } from "./devices";

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 40px;

  main {
    display: flex;
    flex-direction: column;
  }
  @media ${devices.lg} {
    main {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;
