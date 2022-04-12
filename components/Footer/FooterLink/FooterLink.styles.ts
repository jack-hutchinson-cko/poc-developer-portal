import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isUnderlined: boolean;
}

export const StyledLink = styled.a<Props>`
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  cursor: pointer;
  color: var(--footer-secondary-color);

  &:hover {
    text-decoration: ${({ isUnderlined }) =>
      isUnderlined ? "underline" : "inherit"};
  }
`;
