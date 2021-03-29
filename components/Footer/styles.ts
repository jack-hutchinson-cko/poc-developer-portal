import styled from 'styled-components';
import { device } from '../css/tokens';

export const Background = styled.footer`
	height: 100%;
	width: 100%;
	background: var(--footer-background);
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
	background: var(--footer-background);
	margin: 40px auto;
`;

export const Section = styled.div`
	position: relative;
	margin: 0 auto;
	padding: 64px 0px;
	max-width: 1360px;
	width: 100%;
	background-color: var(--footer-background);

	${device.toLaptopL} {
		padding: 64px 40px;
	}
`;
