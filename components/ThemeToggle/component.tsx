import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
	background: var(--toggle-color);
	border-radius: 30px;
	cursor: pointer;
	display: flex;
	height: 24px;
	margin: auto 0;
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
	${SunAndMoonStyles};
	justify-content: flex-end;
`;

const StyledSun = styled.div`
	${SunAndMoonStyles};
`;

const StyledThumb = styled.div`
	background: var(--toggle-circle);
	border-radius: 50%;
	height: 20px;
	left: 2px;
	position: absolute;
	top: 2px;
	transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
	width: 20px;
	transform: ${(props: { isDarkMode: boolean }) => (props.isDarkMode ? 'translateX(26px)' : '')};
`;

export const ThemeToggle = (): JSX.Element => {
	const [isDarkMode, setDarkMode] = useState<boolean>(false);

	useEffect(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.getElementById('___gatsby').className = 'dark';
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	const toggleTheme = () => {
		const activeTheme = !isDarkMode ? 'dark' : 'light';
		window.sessionStorage.setItem('theme', activeTheme);
		document.getElementById('___gatsby').className = activeTheme;
		setDarkMode(!isDarkMode);
	};

	return (
		<StyledContainer onClick={() => toggleTheme()}>
			<StyledMoon>🌛</StyledMoon>
			<StyledSun>☀️</StyledSun>
			<StyledThumb isDarkMode={isDarkMode}></StyledThumb>
		</StyledContainer>
	);
};

export default ThemeToggle;
export { StyledContainer, StyledThumb };
