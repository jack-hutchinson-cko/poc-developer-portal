import styled from "styled-components";
import { createBreakpointTo, Breakpoints, SIZE } from "../../constants/screen";
import { spacing } from "../../constants/spacingSize";

type SubFooterProps = {
  isMobile?: boolean;
  isTablet?: boolean;
};

type SubFooterGridItemProps = {
  direction?: string;
};

export const SubFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: ${spacing.s100}px;

  @media ${Breakpoints.MOBILE} {
    margin-top: 48px;
  }
`;

export const SubFooterGridItem = styled.div<SubFooterGridItemProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: ${({ direction }) => direction || "column"};
  width: 100%;
  font-size: 14px;

  @media ${createBreakpointTo(SIZE.L)} {
    font-size: 16px;
    flex-direction: column;
  }
`;

export const SubFooterTitle = styled.p`
  margin: 0;
  padding: 0;
  color: var(--footer-primary-color);
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

export const SubFooterDescription = styled.div<SubFooterProps>`
  color: var(--footer-secondary-color);
  max-width: 40%;
  font-size: 11px;
  line-height: 16px;

  p {
    margin: 0;
    padding: 0;
    color: var(--footer-secondary-color) !important;
  }

  @media ${createBreakpointTo(SIZE.L)} {
    max-width: 100%;
  }
`;
