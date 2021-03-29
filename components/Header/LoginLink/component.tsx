import React from 'react';
import { Chevron } from '../../svg';
import { StyledLink } from '../styles';
import { StyledContainer, StyledLoginLink, StyledSVG } from './loginLink.styles';
import LoginDropdown from '../LoginDropdown';
import useComponentVisible from '../useComponentVisible';

const LoginLink = (): JSX.Element => {
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

	return (
		<StyledLoginLink ref={ref}>
			<StyledContainer onClick={() => setIsComponentVisible(!isComponentVisible)}>
				<StyledLink>Log in</StyledLink>
				<StyledSVG isOpen={isComponentVisible}>
					<Chevron />
				</StyledSVG>
			</StyledContainer>
			{isComponentVisible && <LoginDropdown />}
		</StyledLoginLink>
	);
};

export default LoginLink;
export { StyledContainer };
