import React, { FC } from "react";

import {
  PoliciesList,
  PolicyEntity,
  PolicyLink,
  PolicyButton,
  PolicyEntityType,
} from "../../types";
import FooterLink from "../../FooterLink";
import {
  SubFooterList,
  SubFooterListItem,
  FooterButton,
} from "./SubFooter.styles";

type Props = {
  policies: PoliciesList;
};

const SubFooterLinks: FC<Props> = ({ policies }) => {
  const mapContent = (entity: PolicyEntity<unknown>) => {
    if (entity.type === PolicyEntityType.BUTTON) {
      const { props } = entity as PolicyEntity<PolicyButton>;
      return (
        <FooterButton type="button" {...props}>
          {entity.name}
        </FooterButton>
      );
    }
    const { link } = entity as PolicyEntity<PolicyLink>;
    return (
      <FooterLink href={link} underline external>
        {entity.name}
      </FooterLink>
    );
  };
  return (
    <SubFooterList>
      {policies.map((entity) => (
        <SubFooterListItem key={entity.name}>
          {mapContent(entity)}
        </SubFooterListItem>
      ))}
    </SubFooterList>
  );
};

export default SubFooterLinks;
