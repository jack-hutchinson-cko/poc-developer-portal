import { Meta } from '@storybook/react/types-6-0';
import Information from '../Information';
import Wrapper from './Wrapper';

export default {
	title: 'Information',
	component: Information,
} as Meta;

const bodyText =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const InformationStory = () => (
	<Wrapper>
		<Information type="information">{bodyText}</Information>
	</Wrapper>
);

export const TipStory = () => (
	<Wrapper>
		<Information type="tip">{bodyText}</Information>
	</Wrapper>
);

export const NoteStory = () => (
	<Wrapper>
		<Information type="note">{bodyText}</Information>
	</Wrapper>
);

export const WarningStory = () => (
	<Wrapper>
		<Information type="warning">{bodyText}</Information>
	</Wrapper>
);
