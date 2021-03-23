import { Meta } from '@storybook/react/types-6-0';
import ButtonLink from '../ButtonLink';
import Wrapper from './Wrapper';

export const ButtonLinkStory = () => (
	<Wrapper>
		<ButtonLink to="#">Getting started</ButtonLink>
	</Wrapper>
);

export default {
	title: 'ButtonLink',
	component: ButtonLink,
} as Meta;
