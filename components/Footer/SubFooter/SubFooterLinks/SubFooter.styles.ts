import styled from "styled-components";

import { SIZE, createBreakpointTo } from "../../../constants/screen";
import { spacing } from "../../../constants/spacingSize";

export const SubFooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-top: ${spacing.s20}px;

  a {
    font-size: inherit;
    line-height: inherit;
  }

  @media ${createBreakpointTo(SIZE.XL)} {
    gap: ${spacing.s40}px;
  }

  @media ${createBreakpointTo(SIZE.L)} {
    flex-direction: column;
    margin-top: ${spacing.s50}px;
  }
`;

export const SubFooterListItem = styled.li`
  display: block;
  cursor: pointer;
  color: var(--footer-secondary-color);
  font-size: 11px;
  line-height: 16px;
`;

export const FooterButton = styled.button`
  background: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
