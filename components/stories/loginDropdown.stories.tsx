import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import LoginDropdown from '../Header/LoginDropdown';

const Wrapper = styled.div`
	position: relative;
	top: -54px;
	left: 0;
	width: 300px;
`;

export const LoginDropdownStory = () => (
	<Wrapper>
		<LoginDropdown />
	</Wrapper>
);

export default {
	title: 'LoginDropdown',
	component: LoginDropdown,
} as Meta;
