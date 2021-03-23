import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    background: #FFFFC8;
    border: none;
    border-radius: 8px;
    color: #0C1142!important;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    transition: background 0.5s, color 0.5s;
    width: max-content;
`;

interface Props {
    children: JSX.Element;
    href: string;
}

const ButtonLink = ({ children, href }: Props): JSX.Element => (
    <StyledLink href={href}>
        {children}
    </StyledLink>
);

export default ButtonLink;