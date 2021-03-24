import React from 'react';
import styled from 'styled-components';
import { colours } from './css/tokens';

const StyledLink = styled.a`
	background: ${(props: { hierarchy: Hierarchy }) =>
		props.hierarchy === 'primary' ? colours.S1000 : colours.primaryTurqoise};
	border: none;
	border-radius: 8px;
	color: ${(props: { hierarchy: Hierarchy }) =>
		props.hierarchy === 'primary' ? colours.Y80 : colours.S1000}!important;
	display: inline-block;
	font-family: 'Graphik LCG Web';
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	padding: 12px 24px;
	text-align: center;
	text-decoration: none;
	transition: background 0.5s, color 0.5s;
	width: max-content;

	:hover {
		background: ${colours.S1000_hover};
	}
`;

type Hierarchy = 'primary' | 'secondary';

interface Props {
	children: string;
	hierarchy?: Hierarchy;
	to: string;
}

export const ButtonLink = ({ children, hierarchy = 'primary', to }: Props): JSX.Element => (
	<StyledLink href={to} hierarchy={hierarchy}>
		{children}
	</StyledLink>
);

export default ButtonLink;
