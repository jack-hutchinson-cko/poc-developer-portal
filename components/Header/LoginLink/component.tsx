import React, { useState } from 'react';
import { Chevron } from '../../svg';
import { StyledLink } from '../styles';
import { StyledContainer, StyledLoginLink, StyledSVG } from './loginLink.styles';
import LoginDropdown from '../LoginDropdown';

const LoginLink = (): JSX.Element => {
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<StyledLoginLink>
			<StyledContainer onClick={() => setOpen(!isOpen)}>
				<StyledLink>Log in</StyledLink>
				<StyledSVG isOpen={isOpen}>
					<Chevron />
				</StyledSVG>
			</StyledContainer>
			{isOpen && <LoginDropdown />}
		</StyledLoginLink>
	);
};

export default LoginLink;
export { StyledContainer };
