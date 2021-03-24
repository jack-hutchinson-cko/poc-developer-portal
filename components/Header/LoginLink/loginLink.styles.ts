import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	gap: 12px;
	font-family: 'Graphik LCG Web';
`;

export const StyledLoginLink = styled.div`
	align-items: center;
	display: flex;
	position: relative;
`;

export const StyledSVG = styled.div`
	display: flex;
	margin: auto;
	transform: ${(props: { isOpen: boolean }) => (props.isOpen ? 'rotate(180deg)' : 'none')};
`;
