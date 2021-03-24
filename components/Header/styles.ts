import styled from 'styled-components';
import { colours, device } from '../css/tokens';
import { CheckoutLogoIcon } from '../svg';

export const StyledLogoIcon = styled(CheckoutLogoIcon)`
	padding-top: 6px;
`;

export const StyledContainer = styled.div`
	background: white;
	border-bottom: 1px solid ${colours.S05};
	display: flex;
	justify-content: space-between;
	font-family: 'Graphik LCG Web';
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
	color: ${colours.S1000};
	font-size: 24px;
	line-height: 40px;
	font-family: 'Graphik LCG Web';
	margin: 0;
`;

export const StyledLink = styled.a`
	color: ${colours.S1000};
	font-family: Graphik LCG;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	margin: auto;
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
