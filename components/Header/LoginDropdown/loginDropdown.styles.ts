import styled from 'styled-components';

export const StyledContainer = styled.div`
	background: var(--background);
	border: 1px solid var(--border);
	box-shadow: 0px 2px 5px rgba(12, 17, 66, 0.15);
	color: var(--font-color);
	display: flex;
	flex-direction: column;
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
	background: var(--test-account-background);
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
	color: var(--font-color);
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
	color: var(--font-color);
	text-decoration: underline;
`;

export const StyledButtonContainer = styled.div`
	display: flex;
	gap: 16px;
	margin: auto;
`;
