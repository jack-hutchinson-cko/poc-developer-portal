import styled from 'styled-components';
import { device } from '../../css/tokens';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	${device.toTablet} {
		flex-direction: column;
	}
`;

export const SolutionsLinksContainer = styled.div`
	width: 32%;
	margin-top: 20px;

	@media only screen and (min-width: 768px) and (max-width: 1080px) {
		margin-top: 40px;
		padding: 0 0 20px 0;
		width: 36%;
	}

	${device.toTablet} {
		border-bottom: 1px solid var(--border);
		margin-top: 40px;
		padding: 0 0 20px 0;
		width: auto;
	}
`;

export const LinksContainer = styled.div`
	margin-top: 20px;

	${device.toTablet} {
		border-bottom: 1px solid var(--border);
		padding: 0 0 20px 0;
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
		display: ${(props: { isDisplayed: boolean }) => (props.isDisplayed ? 'flex' : 'none')};
		transition: all 0.5s;
		&.solutions-second-col {
			margin-top: 0;
		}
	}
`;

export const FooterTitle = styled.div`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.11em;
	text-transform: uppercase;
	color: white;
	display: flex;
	justify-content: space-between;
	-webkit-font-smoothing: antialiased;
`;

export const FooterLink = styled.a`
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 40px;
	text-decoration: none;
	color: var(--S20);
	-webkit-font-smoothing: antialiased;

	:hover div {
		border-bottom: 1px solid var(--S20);
	}

	${(props: { labelHere: boolean }) =>
		props.labelHere
			? `&::after {
        content:  "WE'RE HIRING";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 16px;
        text-transform: uppercase;
        color: var(--font-color);
        background: #2BD4DB;
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

export const StyledIcon = styled.div`
	display: none;

	${device.toTablet} {
		display: flex;
		align-items: center;
	}
`;
