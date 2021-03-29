import styled from 'styled-components';
import { device } from '../css/tokens';
import { CheckoutLogoIcon } from '../svg';

export const StyledLogoIcon = styled(CheckoutLogoIcon)`
	padding-top: 6px;
`;

export const StyledContainer = styled.header`
	background: var(--header-background);
	border-bottom: 1px solid var(--border);
	color: var(--font-color);
	display: flex;
	justify-content: space-between;
	padding: 24px 40px;
	width: 100%;
`;

export const StyledLogo = styled.a`
	align-items: center;
	display: flex;
	gap: 12px;
	padding: 0;
	margin: 0;
	text-decoration: none;

	:hover {
		text-decoration: none;
	}
`;

export const StyledLogoText = styled.h3`
	color: var(--font-color);
	font-size: 24px;
	line-height: 40px;
	margin: 0;
`;

export const StyledLink = styled.a`
	color: var(--font-color);
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	margin: auto;

	${device.toTablet} {
		display: none;
	}
`;

export const StyledLeftHeader = styled.div`
	display: flex;
	gap: 136px;

	${device.fromTablet} {
		gap: 40px;
	}
`;

export const StyledRightHeader = styled.div`
	display: flex;
	gap: 24px;
`;
