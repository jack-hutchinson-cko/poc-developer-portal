import styled from 'styled-components';
import { device } from '../../css/tokens';

export const StyledContainer = styled.div`
	display: flex;
	gap: 12px;

	${device.toTablet} {
		display: none;
	}
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
