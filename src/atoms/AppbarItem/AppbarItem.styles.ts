import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAppbarWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  width: 100%;
  align-items: center;
`;

export const StyledIconWrapper = styled.div``;

export const StyledLink = styled(Link)`
  position: relative;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  padding: 0.35rem 0.5rem;
  align-items: center;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  color: white;
  &:hover {
    background-color: #222;
  }

  svg {
    height: 18px;
    width: 18px;
  }
  &.is-active {
    background-color: var(--primary-color);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

    svg {
      fill: white;
    }
  }
`;

export const StyledMsgBadge = styled.div`
  font-size: 8px;
  padding: 2px 4px;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -8px;
  border-radius: 4px;
`;
