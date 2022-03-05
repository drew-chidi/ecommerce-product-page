import styled from "styled-components";

export const BadgeContainer = styled.div`
  width: 20px;
  position: relative;
  top: -10px;
  right: 10%;
  & > p {
    background: hsl(26, 100%, 55%);
    border-radius: 40%;
    color: white;
    font-size: 0.875rem;
    margin: 0;
  }
`;
