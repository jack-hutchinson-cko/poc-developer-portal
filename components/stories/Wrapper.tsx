import styled from 'styled-components';

interface Props {
	children: JSX.Element;
}

const StyledWrapper = styled.div`
	margin: 40px;
`;

const Wrapper = ({ children }: Props): JSX.Element => <StyledWrapper>{children}</StyledWrapper>;

export default Wrapper;
