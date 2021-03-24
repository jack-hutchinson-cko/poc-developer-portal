import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Header from '../Header';

const Wrapper = styled.div`
	width: 1360px;
`;

export const HeaderStory = () => (
	<Wrapper>
		<Header />
	</Wrapper>
);

export default {
	title: 'Header',
	component: Header,
} as Meta;
