import styled from 'styled-components';
import { colours } from '../../css/tokens';

export const StyledContainer = styled.div`
	background: white;
	border: 1px solid ${colours.S05};
	box-shadow: 0px 2px 5px rgba(12, 17, 66, 0.15);
	display: flex;
	flex-direction: column;
	font-family: 'Graphik LCG Web';
	position: relative;
	gap: 16px;
	padding: 32px;
	width: 452px;
	position: absolute;
	top: 64px;
	z-index: 1000;
`;

export const StyledSVG = styled.div`
	display: flex;
	margin: auto;
	transform: ${(props: { isOpen: boolean }) => (props.isOpen ? 'rotate(180deg)' : 'none')};
`;

export const StyledTopLabel = styled.div`
	display: flex;
	gap: 12px;
`;

export const StyledItem = styled.div``;

export const StyledText = styled.p`
	display: flex;
	align-items: center;
	font-size: 14px;
	gap: 8px;
	margin: 8px 0 0;
`;
