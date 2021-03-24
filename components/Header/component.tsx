import React from 'react';
import { ThemeToggle } from '../index';
import LoginLink from './LoginLink';
import MenuLink from './MenuLink';
import {
	StyledContainer,
	StyledLink,
	StyledLeftHeader,
	StyledLogo,
	StyledLogoIcon,
	StyledLogoText,
	StyledRightHeader,
} from './styles';

const Header = (): JSX.Element => (
	<StyledContainer>
		<StyledLeftHeader>
			<StyledLogo href="/">
				<StyledLogoIcon />
				<StyledLogoText>Documentation</StyledLogoText>
			</StyledLogo>
			<MenuLink />
		</StyledLeftHeader>
		<StyledRightHeader>
			<LoginLink />
			<StyledLink>Get test account</StyledLink>
			<ThemeToggle />
		</StyledRightHeader>
	</StyledContainer>
);

export default Header;
