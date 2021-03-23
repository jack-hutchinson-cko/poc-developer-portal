import React from 'react';
import styled from 'styled-components';
import { colours } from './css/tokens';
import CardArrow from './svgs/CardArrow';

const StyledContainer = styled.a`
    background: transparent;
    border-radius: 8px;
    border: 1px solid ${colours.S05};
    color: ${colours.S1000};
    display: flex;
    flex-direction: column;
    padding: 32px 32px 40px;
    margin: 24px 0px;
    text-decoration: none;

    font-family: "Graphik LCG Web";
    
    :hover {
        border: 1px solid #2BD4DB;
        text-decoration: none;
    }
`;

const StyledTitle = styled.h3`
    font-size: 24px;
    font-weight: 500;
    margin: 10px 0 10px;
`;

const StyledBody = styled.p`
    font-size: 16px;    
    margin-bottom: 32px;
`;

const StyledBottom = styled.div`
    display: flex;
    justify-content: flex-end;
`;

interface Props {
    children: string;
    title: string;
    to: string;
}

const Card = ({ children, title, to }: Props): JSX.Element => (
    <StyledContainer href={to}>
        <StyledTitle>{title}</StyledTitle>
        <StyledBody>{children}</StyledBody>
        <StyledBottom>
            <CardArrow />
        </StyledBottom>
    </StyledContainer>
);

export default Card;