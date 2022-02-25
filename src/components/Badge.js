import React from "react";
import { BadgeContainer } from "./styles/Badge.styled";

const Badge = ({ count }) => {
  return (
    <BadgeContainer>
      <p>{count}</p>
    </BadgeContainer>
  );
};

export default Badge;
