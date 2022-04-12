import React from "react";
import { footerContent } from "./footerContent";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import SubFooter from "./SubFooter";

import { FooterWrapper, FooterContainer } from "./Footer.styles";

const Footer = () => {
  const { navigation, policies, social } = footerContent;
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo />
        <FooterLinks navigation={navigation} />
        <SubFooter policies={policies} social={social} />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
