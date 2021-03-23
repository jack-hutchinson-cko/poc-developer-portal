import React from 'react';
import styled from 'styled-components';
import { colours } from './css/tokens';

const StyledLink = styled.a`
    background: ${colours.S1000};
    border: none;
    border-radius: 8px;
    color: #FFFFC8!important;
    display: inline-block;
    font-family: "Graphik LCG Web";
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
    href: string;
}

const ButtonLink = ({ children, href }: Props): JSX.Element => (
    <StyledLink href={href}>
        {children}
    </StyledLink>
);

export default ButtonLink;