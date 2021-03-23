import styled from 'styled-components';
import { colours, device } from '../css/tokens';

export const Background = styled.div`
	height: 100%;
	width: 100%;
	background: ${colours.S1000};
	margin-top: 0;
`;

export const Container = styled.div``;

export const LogoContainer = styled.div`
	height: 50px;
	display: flex;
	align-items: center;

	select {
		flex: 0;
	}
`;

export const LogoWrapper = styled.div`
	flex: 1;
`;

export const LineSeparator = styled.div`
	width: 100%;
	height: 1px;
	max-width: 1232px;
	background: ${colours.S1000};
	margin: 40px auto;
`;

export const Section = styled.div`
	position: relative;
	margin: 0 auto;
	padding: 64px 0px;
	max-width: 1360px;
	width: 100%;
	background-color: ${colours.S1000};

	${device.toMobileXL} {
		padding: 64px 24px;
	}
`;
