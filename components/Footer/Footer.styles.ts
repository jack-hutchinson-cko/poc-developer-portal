import styled from "styled-components";

import { createBreakpointTo, Breakpoints, SIZE } from "../constants/screen";
import { spacing } from "../constants/spacingSize";

export const FooterWrapper = styled.footer`
  background: var(--footer-background);

  #ot-sdk-btn.ot-sdk-show-settings.onetrust-button {
    border: none;
    height: initial;
    white-space: initial;
    word-wrap: initial;
    padding: initial;
    color: var(--footer-secondary-color);
    font-size: inherit;
    line-height: inherit;
    transition: none;

    &:hover {
      text-decoration: underline;
      background-color: inherit;
      color: inherit;
    }
  }

  #onetrust-consent-sdk #onetrust-policy-text {
    a:focus {
      outline: none;
    }
  }
`;

export const FooterContainer = styled.main`
  max-width: 1360px;
  margin: 0 auto;
  padding: ${spacing.s90}px;

  @media ${Breakpoints.TABLET} {
    padding: ${spacing.s80}px ${spacing.s60}px;
  }

  @media ${Breakpoints.MOBILE} {
    padding: ${spacing.s80}px ${spacing.s50}px ${spacing.s100}px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    padding: ${spacing.s80}px ${spacing.s50}px;
  }
`;
