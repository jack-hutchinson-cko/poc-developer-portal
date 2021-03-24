import React from 'react';
import styled from 'styled-components';
import { colours } from './css/tokens';

const StyledLink = styled.a`
	color: ${colours.S1000};
	display: inline-block;
	font-family: 'Graphik LCG Web';
	font-size: 16px;
	font-weight: 500;
	line-height: 1em;
	padding: 0px;
	text-align: left;
	text-decoration: none;
	transition: background 0.5s, color 0.5s;

	:hover {
		text-decoration: underline;
	}
`;

interface Props {
	children: string;
	to: string;
}

export const Link = ({ children, to }: Props): JSX.Element => <StyledLink href={to}>{children}</StyledLink>;

export default Link;
