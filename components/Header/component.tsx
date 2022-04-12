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
	StyledSearchBox,
} from './styles';

const Header = (): JSX.Element => (
	<StyledContainer>
		<StyledLeftHeader>
			<StyledLogo href="/developer-portal/reference/overview/">
				<StyledLogoIcon />
				<StyledLogoText>Documentation</StyledLogoText>
			</StyledLogo>
			<MenuLink />
			<StyledSearchBox />
		</StyledLeftHeader>
		<StyledRightHeader>
			<LoginLink />
			<StyledLink>Get test account</StyledLink>
			<ThemeToggle />
		</StyledRightHeader>
	</StyledContainer>
);

export default Header;
