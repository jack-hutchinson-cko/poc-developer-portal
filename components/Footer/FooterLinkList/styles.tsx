import styled from 'styled-components';
import { colours, device } from '../../css/tokens';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	${device.toMobileXL} {
		flex-direction: column;
	}
`;

export const SolutionsLinksContainer = styled.div`
	width: 32%;
	margin-top: 40px;

	@media only screen and (min-width: 768px) and (max-width: 1080px) {
		width: 36%;
	}

	${device.toTablet} {
		width: auto;
		padding: 0;
	}
`;

export const LinksContainer = styled.div`
	margin-top: 40px;

	${device.toTablet} {
		padding: 0;
	}
`;

export const ColMainWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	${device.toTablet} {
		flex-direction: column;
	}
`;

export const ColWrapper = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: column;

	${device.toTablet} {
		&.solutions-second-col {
			margin-top: 0;
		}
	}
`;

export const FooterTitle = styled.p`
	font-family: 'Graphik LCG Web', 'sans-serif';
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.11em;
	text-transform: uppercase;
	color: white;
	-webkit-font-smoothing: antialiased;
`;

export const FooterLink = styled.a`
	font-family: 'Graphik LCG Web', 'sans-serif';
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 40px;
	text-decoration: none;
	color: ${colours.S20};
	-webkit-font-smoothing: antialiased;

	:hover div {
		border-bottom: 1px solid ${colours.S20};
	}

	${(props: { labelHere: boolean }) =>
		props.labelHere
			? `&::after {
        content:  "WE'RE HIRING";
        font-family: 'Graphik LCG Web', 'sans-serif';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 16px;
        text-transform: uppercase;
        color: ${colours.S1000};
        background: ${colours.primaryTurqoise};
        border-radius: 4px;
        margin-left: 8px;
        padding: 4px;
        text-decoration: none;
      }`
			: ''};

	&:hover:after {
		text-decoration: none;
	}

	${device.toMobileXL} {
		line-height: 32px;
	}
`;

export const LinkText = styled.div`
	border-bottom: 1px solid transparent;
	display: inline;
	padding-bottom: 4px;
	transition: border-bottom-color 0.2s ease;
`;
