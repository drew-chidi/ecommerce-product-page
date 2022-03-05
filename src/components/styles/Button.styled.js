import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  height: 50px;
  border: 0;
  fill: white;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  width: ${({ width }) => width || "auto"};
  margin: ${({ margin }) => margin || "auto"};
  font-weight: 700;
  display: ${({ $display }) => $display};

  &:hover {
    background-color: ${({ hover }) => hover || "hsl(26, 100%, 55%)"};
  }

  & > p {
    color: white;
    display: inline;
    width: 100%;
    text-align: center;
    font-size: 1rem;
  }
`;
