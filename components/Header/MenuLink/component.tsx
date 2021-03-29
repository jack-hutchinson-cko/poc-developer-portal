import React from 'react';
import { Chevron } from '../../svg';
import MenuDropdown from '../MenuDropdown';
import { StyledLink } from '../styles';
import { StyledContainer, StyledMenuLink, StyledSVG } from './menuLink.styles';
import useComponentVisible from '../useComponentVisible';

const MenuLink = (): JSX.Element => {
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

	return (
		<StyledMenuLink ref={ref}>
			<StyledContainer onClick={() => setIsComponentVisible(!isComponentVisible)}>
				<StyledLink>API Reference</StyledLink>
				<StyledSVG isOpen={isComponentVisible}>
					<Chevron />
				</StyledSVG>
			</StyledContainer>
			{isComponentVisible && <MenuDropdown />}
		</StyledMenuLink>
	);
};

export default MenuLink;
export { StyledContainer };
