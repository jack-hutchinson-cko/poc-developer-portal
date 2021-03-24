import React, { useState } from 'react';
import { Chevron } from '../../svg';
import MenuDropdown from '../MenuDropdown';
import { StyledLink } from '../styles';
import { StyledContainer, StyledMenuLink, StyledSVG } from './menuLink.styles';

const MenuLink = (): JSX.Element => {
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<StyledMenuLink>
			<StyledContainer onClick={() => setOpen(!isOpen)}>
				<StyledLink>API Reference</StyledLink>
				<StyledSVG isOpen={isOpen}>
					<Chevron />
				</StyledSVG>
			</StyledContainer>
			{isOpen && <MenuDropdown />}
		</StyledMenuLink>
	);
};

export default MenuLink;
