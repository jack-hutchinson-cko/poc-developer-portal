import { Meta } from '@storybook/react/types-6-0';
import ThemeToggle from '../ThemeToggle';
import Wrapper from './Wrapper';

export default {
	title: 'ThemeToggle',
	component: ThemeToggle,
} as Meta;

export const ThemeToggleStory = () => (
	<Wrapper>
		<ThemeToggle />
	</Wrapper>
);
