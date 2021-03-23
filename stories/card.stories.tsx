import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Card from '../components/Card';

export default {
    title: 'Card',
    component: Card,
  } as Meta;

const bodyText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const InformationStory = () => <Card title="Lorem Ipsum" >{bodyText}</Card>;