import React, { FC, AnchorHTMLAttributes } from "react";
import { StyledLink } from "./FooterLink.styles";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  underline?: boolean;
  external?: boolean;
}

const FooterLink: FC<Props> = ({
  href,
  children,
  underline = false,
  external = false,
  ...props
}) => {
  const additionalProps = external
    ? {
        target: "_blank",
        rel: "noreferrer noopener",
      }
    : {};

  return (
    <StyledLink isUnderlined={underline} {...additionalProps} {...props}>
      {children}
    </StyledLink>
  );
};

export default FooterLink;
