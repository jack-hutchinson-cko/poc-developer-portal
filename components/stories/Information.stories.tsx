import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Information from '../Information';

export default {
	title: 'Information',
	component: Information,
} as Meta;

const bodyText =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const InformationStory = () => <Information type="information">{bodyText}</Information>;
export const TipStory = () => <Information type="tip">{bodyText}</Information>;
export const NoteStory = () => <Information type="note">{bodyText}</Information>;
export const WarningStory = () => <Information type="warning">{bodyText}</Information>;
