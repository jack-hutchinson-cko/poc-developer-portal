import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import MenuDropdown from '../Header/MenuDropdown';

const Wrapper = styled.div`
	position: relative;
	top: -54px;
	left: 0;
	width: 300px;
`;

export const MenuDropdownStory = () => (
	<Wrapper>
		<MenuDropdown />
	</Wrapper>
);

export default {
	title: 'MenuDropdown',
	component: MenuDropdown,
} as Meta;
