import styled from "styled-components";

import { createBreakpointTo, SIZE, Breakpoints } from "../../constants/screen";
import { spacing } from "../../constants/spacingSize";
import Accordion, { AccordionHead } from "../../Accordion";

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: ${spacing.s70}px;

  @media ${createBreakpointTo(SIZE.L)} {
    margin-top: ${spacing.s00};
    flex-direction: column;
  }
`;

export const FooterAccordion = styled(Accordion)`
  display: none;
  margin-top: ${spacing.s50}px;
  padding: ${spacing.s00} ${spacing.s00} ${spacing.s50}px;
  color: #fff;
  border-bottom: 1px solid #55587b;

  @media ${createBreakpointTo(SIZE.L)} {
    display: block;
  }

  @media ${Breakpoints.MOBILE} {
    margin-top: ${spacing.s50}px;
    padding: ${spacing.s00} ${spacing.s00} ${spacing.s50}px;
  }
`;

export const FooterAccordionHead = styled(AccordionHead)`
  padding: 0;
  text-align: left;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #fff;

  @media ${createBreakpointTo(SIZE.L)} {
    & svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export const FooterListTitle = styled.p`
  margin: 0;
  color: #fff !important;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 1.76px;
`;

export const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 60px;
  margin-top: 14px;

  @media ${createBreakpointTo(SIZE.L)} {
    flex-direction: column;
    gap: 25px;
    margin-top: ${spacing.s40}px;
  }
`;

export const FooterColumn = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FooterColumnItem = styled.li`
  color: var(--footer-secondary-color);
  font-size: 14px;
  line-height: 40px;

  a {
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s, color 0.5s;

    &:hover {
      border-bottom: 0.5px var(--footer-secondary-color);
    }
  }

  @media ${createBreakpointTo(SIZE.L)} {
    line-height: 32px;
  }
`;

export const FooterLinkSpecial = styled.span`
  margin-left: 8px;
  padding: 4px 6px;
  color: #0c1142 !important;
  background: #d5f6f8;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 16px;
`;

export const FooterColumnsWrapper = styled.div`
  display: block;

  @media ${createBreakpointTo(SIZE.L)} {
    display: none;
  }
`;
