import styled from 'styled-components';
import { colours } from '../../css/tokens';

export const StyledContainer = styled.div`
	background: white;
	border: 1px solid ${colours.S05};
	box-shadow: 0px 2px 5px rgba(12, 17, 66, 0.15);
	color: ${colours.S1000};
	display: flex;
	flex-direction: column;
	font-family: 'Graphik LCG Web';
	position: relative;
	width: 434px;
	position: absolute;
	top: 64px;
	right: -140px;
	z-index: 1000;
`;

export const StyledSVG = styled.div`
	display: flex;
	margin: auto;
	transform: ${(props: { isOpen: boolean }) => (props.isOpen ? 'rotate(180deg)' : 'none')};
`;

export const StyledLabel = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	weight: 500;
`;

export const StyledTop = styled.div`
	padding: 40px 32px;
`;

export const StyledBottom = styled.div`
	background: ${colours.S05};
	padding: 40px 32px;
`;

export const StyledText = styled.p`
	display: flex;
	gap: 8px;
`;

export const StyledTextBottom = styled.p`
	display: flex;
	gap: 8px;
	margin-left: 30px;
`;

export const StyledApplyLink = styled.a`
	align-items: center;
	display: flex;
	color: ${colours.S1000};
	font-size: 14px;
	font-weight: 500;
	gap: 8px;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	margin: auto 0;
	padding: 0px;
	text-decoration: none;

	:hover {
		text-decoration: none;
	}
`;

export const StyledArrow = styled.div`
	display: inline;
	padding-top: 2px;
`;

export const StyledLink = styled.a`
	color: ${colours.S1000};
	text-decoration: underline;
`;

export const StyledButtonContainer = styled.div`
	display: flex;
	gap: 16px;
	margin: auto;
`;
