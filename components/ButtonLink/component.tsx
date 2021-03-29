import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	background: ${(props: { hierarchy: Hierarchy }) =>
		props.hierarchy === 'primary' ? 'var(--btn-primary-bg)' : 'var(--btn-secondary-bg)'};
	border: none;
	border-radius: 8px;
	color: ${(props: { hierarchy: Hierarchy }) =>
		props.hierarchy === 'primary' ? 'var(--btn-primary-font)' : 'var(--btn-secondary-font)!important'};
	display: inline-block;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	padding: 12px 24px;
	text-align: center;
	text-decoration: none;
	transition: background 0.5s, color 0.5s;
	width: max-content;

	:hover {
		background: ${(props: { hierarchy: Hierarchy }) =>
			props.hierarchy === 'primary' ? 'var(--btn-primary-hover)' : 'var(--btn-secondary-hover)'};
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
