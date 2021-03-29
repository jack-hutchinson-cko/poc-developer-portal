// @ts-nocheck
import { SearchBox } from '@redocly/ui';
import styled from 'styled-components';
import { device } from '../css/tokens';
import { CheckoutLogoIcon } from '../svg';

export const StyledSearchBox = styled(SearchBox)`
	border: 1px solid var(--border);
	border-radius: 8px;
	width: 380px;
	height: 100%;

	input {
		border-radius: 8px;
		color: var(--secondary-font-color);
		margin-top: 5px;
		height: 40px;
		line-height: 24px;
		padding: 16px 8px;
		max-width: 380px;
		width: 380px;
	}

	input::placeholder {
		color: var(--secondary-font-color);
	}

	span {
		top: 45%;
	}

	ul {
		background: var(--header-background);
		border-radius: 8px;
		border: 1px solid var(--border);
		top: calc(100% + 15px);
		width: 380px;
	}

	ul div {
		color: var(--font-color);
	}

	ul div:first-child {
		padding-top: 16px;
	}

	${device.toLaptop} {
		width: 280px;

		span {
			margin: auto;
			padding: 0px;
		}

		input {
			width: 280px;
		}
	}

	${device.toTablet} {
		width: 180px;

		span {
			margin: auto;
			padding: 0px;
		}

		input {
			width: 180px;
			margin-top: 4px;
		}

		span span {
			display: none;
		}
	}

	${device.toMobileXL} {
		input {
			height: 32px;
			margin-top: 0px;
		}
	}
`;

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

	${device.toMobileXL} {
		display: none;
	}
`;

export const StyledLink = styled.a`
	color: var(--font-color);
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	margin: auto;

	${device.toLaptop} {
		display: none;
	}
`;

export const StyledLeftHeader = styled.div`
	display: flex;
	gap: 40px;

	${device.toMobileXL} {
		gap: 16px;
	}
`;

export const StyledRightHeader = styled.div`
	display: flex;
	gap: 24px;
`;
