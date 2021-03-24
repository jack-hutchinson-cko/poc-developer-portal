import { Meta } from '@storybook/react/types-6-0';
import Link from '../Link';
import Wrapper from './Wrapper';

export const LinkStory = () => (
	<Wrapper>
		Hey, you should check out <Link to="#">this link</Link> its super cool
	</Wrapper>
);

export default {
	title: 'Link',
	component: Link,
} as Meta;
