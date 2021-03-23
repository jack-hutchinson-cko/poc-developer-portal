import { Meta } from '@storybook/react/types-6-0';
import Card from '../Card';
import Wrapper from './Wrapper';

const bodyText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`;

export const CardStory = () => (
	<Wrapper>
		<Card title="Lorem Ipsum" to="#">
			{bodyText}
		</Card>
	</Wrapper>
);

export default {
	title: 'Card',
	component: Card,
} as Meta;
