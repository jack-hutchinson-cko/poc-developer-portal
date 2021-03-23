import styled from 'styled-components';
import { colours } from './css/tokens';

const StyledLink = styled.a`
	background: ${colours.S1000};
	border: none;
	border-radius: 8px;
	color: #ffffc8 !important;
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

interface Props {
	children: string;
	to: string;
}

const ButtonLink = ({ children, to }: Props): JSX.Element => <StyledLink href={to}>{children}</StyledLink>;

export default ButtonLink;
