import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import ButtonLink from '../ButtonLink';

export default {
    title: 'ButtonLink',
    component: ButtonLink,
  } as Meta;

export const ButtonLinkStory = () => <ButtonLink to="/">Getting started</ButtonLink>;
