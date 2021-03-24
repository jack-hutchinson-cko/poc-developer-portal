import styled from 'styled-components';
import { colours } from '../css/tokens';

interface Props {
	children: JSX.Element | JSX.Element[] | string | any[];
}

const StyledWrapper = styled.div`
	margin: 40px;
	color: ${colours.S1000};
`;

const Wrapper = ({ children }: Props): JSX.Element => <StyledWrapper>{children}</StyledWrapper>;

export default Wrapper;
