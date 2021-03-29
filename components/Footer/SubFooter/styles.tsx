import styled from 'styled-components';
import { device } from '../../css/tokens';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const GridItem = styled.div`
	width: 100%;
	display: flex;

	${device.toTablet} {
		flex-direction: column;
	}
`;

export const Title = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 11px;
	line-height: 16px;
	color: white;
	width: 20%;

	${device.toTablet} {
		width: 100%;
		margin-bottom: 20px;
	}
`;

export const Description = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 18px;
	color: var(--S20);
	margin-top: 16px;
	width: 30%;

	${device.toTablet} {
		width: 100%;
	}
`;

export const WrapperItems = styled.div`
	text-align: right;
	width: 80%;
	display: flex;
	justify-content: flex-end;

	${device.toTablet} {
		justify-content: flex-start;
		width: 100%;
		text-align: left;
	}

	${device.toMobileXL} {
		flex-direction: column;
	}
`;

export const LinkItem = styled.a`
	font-style: normal;
	font-weight: normal;
	font-size: 11px;
	line-height: 16px;
	color: var(--S20);
	text-decoration: none;
	padding-left: 40px;
	text-align: center;

	&:first-child {
		padding-left: 0;
	}

	${device.toMobileXL} {
		padding: 0 0 16px 0;
		text-align: left;
	}

	&:hover {
		text-decoration: underline;
	}
`;

export const WrapperLogos = styled.div`
	text-align: right;
	margin-top: 16px;
	width: 70%;

	a {
		padding-left: 24px;
	}

	svg * {
		fill: var(--logo-icon-fill);
	}

	${device.toLaptop} {
		a {
			padding-right: 24px;
			padding-left: 0;
		}
	}

	${device.toTablet} {
		width: 100%;
		text-align: left;
	}
`;
