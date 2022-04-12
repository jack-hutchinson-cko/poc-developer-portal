import React, { FC } from "react";

import { PoliciesList, SocialList } from "../types";
import SubFooterLinks from "./SubFooterLinks";
import SubFooterSocialLinks from "./SubFooterSocialLinks";

import {
  SubFooterWrapper,
  SubFooterGridItem,
  SubFooterTitle,
  SubFooterDescription,
} from "./SubFooter.styles";

type Props = {
  policies: PoliciesList;
  social: SocialList;
};

const SubFooter: FC<Props> = ({ social, policies }) => {
  const currentYear = new Date().getFullYear();

  return (
    <SubFooterWrapper>
      <SubFooterGridItem direction="column">
        <SubFooterTitle>© {currentYear} Checkout.com</SubFooterTitle>
        <SubFooterLinks policies={policies} />
      </SubFooterGridItem>
      <SubFooterGridItem direction="row">
        <SubFooterDescription>
          <p>
            Authorised and regulated as an electronic money institution by the
            UK Financial Conduct Authority under number 900816.
          </p>
        </SubFooterDescription>
        <SubFooterSocialLinks social={social} />
      </SubFooterGridItem>
    </SubFooterWrapper>
  );
};

export default SubFooter;
