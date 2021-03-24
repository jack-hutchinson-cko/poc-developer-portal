import React from 'react';
import { Section } from './styles';
import { Background, LogoContainer, LogoWrapper, LineSeparator } from './styles';
import { CheckoutLogo } from '../svg/CheckoutLogo';
import FooterLinkList from './FooterLinkList';
import SubFooter from './SubFooter';
import { footerData } from './footerData';

const Footer = () => (
	<Background>
		<Section>
			<LogoContainer>
				<LogoWrapper>
					<CheckoutLogo />
				</LogoWrapper>
			</LogoContainer>

			<FooterLinkList links={footerData.body} />

			<LineSeparator />

			<SubFooter />
		</Section>
	</Background>
);

export default Footer;
