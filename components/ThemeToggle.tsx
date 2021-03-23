import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colours } from './css/tokens';

const StyledContainer = styled.div`
    background: ${colours.S500};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    height: 24px;
    margin-top: 19px!important;
    position: relative;
    top: -1px;
    transition: background 0.5s;
    user-select: none;
    width: 50px;
    z-index: 100;
`;

const SunAndMoonStyles = css`
    align-items: center;
    display: flex;
    font-size: 12px;
    padding: 0 4px;
    width: 50%;
`;

const StyledMoon = styled.div`
    ${SunAndMoonStyles}
    justify-content: flex-end;
`;

const StyledSun = styled.div`
    ${SunAndMoonStyles}
`;

const StyledThumb = styled.div`
    background: #090C30;
    border-radius: 50%;
    height: 20px;
    left: 2px;
    position: absolute;
    top: 2px;
    transition: transform .5s cubic-bezier(.23, 1, .32, 1);
    width: 20px;
    transform: ${(props: { isDarkMode: boolean }) => props.isDarkMode ? 'translateX(26px)' : ''};
`;

const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    return (
        <StyledContainer onClick={() => setDarkMode(!isDarkMode) }>
            <StyledMoon>🌛</StyledMoon>
            <StyledSun>☀️</StyledSun>
            <StyledThumb isDarkMode={isDarkMode}></StyledThumb>
        </StyledContainer>
    )
};

export default ThemeToggle;